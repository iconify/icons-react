import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hjlgkqaeu.css';
import '../../css/s/s-ocusbci.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hjlgkqaeu"/><path class="s-ocusbci"/></g>`,
		"fallback": "icon-park-outline:corner-left-up",
	});
}

export default Component;
