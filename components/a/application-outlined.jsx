import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3jmkedbk.css';
import '../../css/e/epdjs8byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG3Qrzedlb" class="w3jmkedbk"/></defs><path class="epdjs8byf"/><use href="#SVG3Qrzedlb"/><use href="#SVG3Qrzedlb"/>`,
		"fallback": "eos-icons:application-outlined",
	});
}

export default Component;
