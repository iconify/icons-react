import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvfzt4bwz.css';
import '../../css/q/qnd0ae6cu.css';
import '../../css/l/l7v84ibfy.css';
import '../../css/v/voafain7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kvfzt4bwz"/><path class="qnd0ae6cu"/><path clip-rule="evenodd" class="l7v84ibfy"/><path clip-rule="evenodd" class="voafain7q"/></g>`,
		"fallback": "streamline-plump-color:information-desk-flat",
	});
}

export default Component;
