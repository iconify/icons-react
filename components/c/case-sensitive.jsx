import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zc_bgg4ss.css';
import '../../css/v/vdez3x3ob.css';
import '../../css/e/elsp8ebhy.css';
import '../../css/v/v2ag8bcvk.css';
import '../../css/v/vxd-d_bwh.css';
import '../../css/n/n9qva2bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow zc_bgg4ss"/><path class="vdez3x3ob"/><path class="elsp8ebhy"/><path class="v2ag8bcvk"/><path class="vxd-d_bwh wm-shine"/><path class="n9qva2bow wm-deco"/></g>`,
		"fallback": "withicons-sticker:case-sensitive",
	});
}

export default Component;
