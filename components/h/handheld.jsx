import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l45ggi9uq.css';
import '../../css/e/e--nwwbsr.css';
import '../../css/n/nrxg6vohj.css';
import '../../css/m/mgzidzb1s.css';
import '../../css/o/opm2e_0wh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="l45ggi9uq"/><path class="e--nwwbsr"/><path class="nrxg6vohj"/><path class="mgzidzb1s"/><path class="opm2e_0wh"/></g>`,
		"fallback": "icon-park:handheld",
	});
}

export default Component;
