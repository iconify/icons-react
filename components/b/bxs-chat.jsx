import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atr529omg.css';
import '../../css/t/tlb5s_7xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atr529omg"/><path class="tlb5s_7xb"/>`,
		"fallback": "bx:bxs-chat",
	});
}

export default Component;
