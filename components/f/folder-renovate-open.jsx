import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/i4xym8b0m.css';
import '../../css/v/v6ukwccfe.css';
import '../../css/s/slyhgd-ej.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="i4xym8b0m"/><path class="v6ukwccfe"/><path class="slyhgd-ej"/></g>`,
		"fallback": "catppuccin:folder-renovate-open",
	});
}

export default Component;
