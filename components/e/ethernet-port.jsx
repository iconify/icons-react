import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4cmhc7yi.css';
import '../../css/e/egez4ttkj.css';
import '../../css/d/d5outdbyg.css';
import '../../css/i/iey62sb4m.css';
import '../../css/w/wj60de_ov.css';
import '../../css/v/vd67ymb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow x4cmhc7yi"/><path class="egez4ttkj"/><path class="d5outdbyg"/><path class="iey62sb4m"/><path class="wj60de_ov wm-shine"/><path class="vd67ymb2b wm-deco"/></g>`,
		"fallback": "withicons-sticker:ethernet-port",
	});
}

export default Component;
