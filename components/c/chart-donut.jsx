import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lahxv7d0q.css';
import '../../css/f/fss_mgeok.css';
import '../../css/w/wwhpzomcr.css';
import '../../css/i/immgo8onp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="lahxv7d0q"/><path class="fss_mgeok wm-shine"/><path class="wm-k wwhpzomcr"/><path class="immgo8onp wm-a"/></g>`,
		"fallback": "withicons-kawaii:chart-donut",
	});
}

export default Component;
