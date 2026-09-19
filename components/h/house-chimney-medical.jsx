import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck8_mw97s.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck8_mw97s"/>`,
		"fallback": "fa6-solid:house-chimney-medical",
	});
}

export default Component;
