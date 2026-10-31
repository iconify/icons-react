import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tv9lcfy4b.css';
import '../../css/t/tva_kvb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tv9lcfy4b"/><path class="tva_kvb3d"/></g>`,
		"fallback": "coolicons:car-duotone-round",
	});
}

export default Component;
