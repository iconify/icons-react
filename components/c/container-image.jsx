import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5iso1b0c.css';
import '../../css/u/ul7vggbgf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5iso1b0c"/><path class="ul7vggbgf"/>`,
		"fallback": "carbon:container-image",
	});
}

export default Component;
