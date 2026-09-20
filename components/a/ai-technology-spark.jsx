import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/n/nisb6ucws.css';
import '../../css/v/v_1d97bew.css';
import '../../css/w/wnf0z1b6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="nisb6ucws"/><path class="v_1d97bew"/><path class="wnf0z1b6j"/></g>`,
		"fallback": "streamline-plump:ai-technology-spark",
	});
}

export default Component;
