import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sffl1tu2o.css';
import '../../css/t/t0wit_bey.css';
import '../../css/v/vcnfm5cjz.css';
import '../../css/f/fyqmx_55y.css';
import '../../css/f/f-q6sumxn.css';
import '../../css/z/zmbel_eru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="sffl1tu2o wm-shadow"/><path class="t0wit_bey"/><path class="vcnfm5cjz"/><path class="fyqmx_55y"/><path class="f-q6sumxn wm-shine"/><path class="wm-deco zmbel_eru"/></g>`,
		"fallback": "withicons-sticker:arrow-right",
	});
}

export default Component;
