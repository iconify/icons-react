import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsao1jbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsao1jbch"/>`,
		"fallback": "andrsrxn:currency-krw",
	});
}

export default Component;
