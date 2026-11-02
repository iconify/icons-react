import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrh45udrk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrh45udrk"/>`,
		"fallback": "sidekickicons:circle-half-full-20-solid",
	});
}

export default Component;
