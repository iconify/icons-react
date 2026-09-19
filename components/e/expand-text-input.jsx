import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/ky8ibgbew.css';
import '../../css/i/iprq872zw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ky8ibgbew"/><path class="iprq872zw"/></g>`,
		"fallback": "icon-park:expand-text-input",
	});
}

export default Component;
