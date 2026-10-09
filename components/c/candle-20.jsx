import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io9vencun.css';
import '../../css/z/z9lj_eqfg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io9vencun"/><path class="z9lj_eqfg"/>`,
		"fallback": "energy-icons:candle-20",
	});
}

export default Component;
