import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lps2qmi-k.css';
import '../../css/h/hx8_3wb3p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lps2qmi-k"/><path class="hx8_3wb3p"/>`,
		"fallback": "thesvg-color:django",
	});
}

export default Component;
