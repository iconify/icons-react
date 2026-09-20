import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/i/iwcyc_bei.css';
import '../../css/v/v_1d97bew.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="iwcyc_bei"/><path class="v_1d97bew"/></g>`,
		"fallback": "streamline-plump:ai-generate-variation-spark",
	});
}

export default Component;
