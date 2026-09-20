import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tne0-ydfm.css';
import '../../css/j/jqmdqobgy.css';
import '../../css/n/n96n0k97b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tne0-ydfm"/><path class="jqmdqobgy"/><path class="n96n0k97b"/>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-code-bold",
	});
}

export default Component;
