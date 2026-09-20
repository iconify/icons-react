import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2wbqwbqv.css';
import '../../css/t/t4exnpses.css';
import '../../css/j/jzjyesbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2wbqwbqv"/><circle class="t4exnpses"/><circle class="jzjyesbzs"/>`,
		"fallback": "prime:car",
	});
}

export default Component;
