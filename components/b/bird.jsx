import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qxo-nnsxg.css';
import '../../css/p/pato6ebtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qxo-nnsxg"/><path class="pato6ebtu"/></g>`,
		"fallback": "hugeicons:bird",
	});
}

export default Component;
