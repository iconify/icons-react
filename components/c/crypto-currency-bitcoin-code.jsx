import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gnzl7wbik.css';
import '../../css/i/it_bg6bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gnzl7wbik"/><path class="it_bg6bsk"/></g>`,
		"fallback": "streamline-ultimate:crypto-currency-bitcoin-code",
	});
}

export default Component;
