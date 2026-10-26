import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/z357atbkg.css';
import '../../css/f/fu71io9gj.css';
import '../../css/s/s4gvfnc1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="z357atbkg"/><path class="fu71io9gj"/><path class="s4gvfnc1y"/></g>`,
		"fallback": "doodle-icons:folder-plus",
	});
}

export default Component;
