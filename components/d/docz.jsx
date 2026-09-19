import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uamfscbae.css';

const viewBox = {"width":511.999,"height":511.999};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uamfscbae"/>`,
		"fallback": "file-icons:docz",
	});
}

export default Component;
