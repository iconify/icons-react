import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wyt8hgbsx.css';
import '../../css/a/azul81bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wyt8hgbsx"/><path class="azul81bfo"/></g>`,
		"fallback": "hugeicons:chart-area",
	});
}

export default Component;
