import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdtmj-bqy.css';
import '../../css/n/nlvvtjrbk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdtmj-bqy"/><path class="nlvvtjrbk"/>`,
		"fallback": "devicon:hibernate",
	});
}

export default Component;
