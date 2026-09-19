import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kw35e5tvb.css';
import '../../css/s/snfj1jyag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="kw35e5tvb"/><path class="snfj1jyag"/></g>`,
		"fallback": "cryptocurrency-color:glxt",
	});
}

export default Component;
