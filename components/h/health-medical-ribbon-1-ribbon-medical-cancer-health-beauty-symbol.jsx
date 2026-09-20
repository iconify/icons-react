import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk453t2nx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk453t2nx"/>`,
		"fallback": "streamline:health-medical-ribbon-1-ribbon-medical-cancer-health-beauty-symbol",
	});
}

export default Component;
