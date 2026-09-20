import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y2c6vke3y.css';
import '../../css/w/wy5c5sban.css';
import '../../css/g/g5ab40b7r.css';
import '../../css/z/z_aisvbnh.css';
import '../../css/v/vx0j5lt2h.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="y2c6vke3y"/><path class="wy5c5sban"/><path class="g5ab40b7r"/><path class="z_aisvbnh"/><path class="vx0j5lt2h"/></g>`,
		"fallback": "marketeq:action-cam",
	});
}

export default Component;
