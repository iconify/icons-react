import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dah10_0uo.css';

const viewBox = {"width":1920,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dah10_0uo"/>`,
		"fallback": "fa:cloud-download",
	});
}

export default Component;
