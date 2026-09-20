import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gjbgqzbaj.css';
import '../../css/f/f_715hp0d.css';
import '../../css/m/m3u_gq9gc.css';
import '../../css/m/mzxrl8bvs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="gjbgqzbaj"/><path class="f_715hp0d"/><path class="m3u_gq9gc"/><path class="mzxrl8bvs"/></g>`,
		"fallback": "streamline-plump-color:empty-clipboard",
	});
}

export default Component;
