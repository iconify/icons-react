import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqq2u8ckh.css';
import '../../css/m/mthptgvbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqq2u8ckh"/><path clip-rule="evenodd" class="mthptgvbg"/>`,
		"fallback": "basil:battry-half-outline",
	});
}

export default Component;
