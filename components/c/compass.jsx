import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/baen2yhxr.css';
import '../../css/o/opyzyd53f.css';
import '../../css/n/neptv8bgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="baen2yhxr"/><circle class="opyzyd53f"/><path class="neptv8bgx"/></g>`,
		"fallback": "icon-park-outline:compass",
	});
}

export default Component;
