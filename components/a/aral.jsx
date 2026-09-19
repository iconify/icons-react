import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gft6yrvkg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gft6yrvkg"/>`,
		"fallback": "cib:aral",
	});
}

export default Component;
