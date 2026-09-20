import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fjbu-658d.css';
import '../../css/j/jnuf-1vzk.css';
import '../../css/q/qc_mf2byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="fjbu-658d"/><path class="jnuf-1vzk"/><path class="qc_mf2byd"/></g>`,
		"fallback": "streamline-cyber:filter-10",
	});
}

export default Component;
