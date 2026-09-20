import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/truvx-bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="truvx-bjg"/>`,
		"fallback": "tdesign:form-filled",
	});
}

export default Component;
