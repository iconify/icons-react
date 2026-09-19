import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/u/u4qqi3ylc.css';
import '../../css/z/z7cd3vb_z.css';
import '../../css/s/s0k85obfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="u4qqi3ylc"/><path class="z7cd3vb_z"/><path class="s0k85obfc"/></g>`,
		"fallback": "icon-park:alignment-bottom-right",
	});
}

export default Component;
