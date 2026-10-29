import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/aow0tbtri.css';
import '../../css/b/b-oy3bbci.css';
import '../../css/e/evke8cc5m.css';
import '../../css/x/xruz2cblj.css';
import '../../css/b/b_m7pqbiv.css';
import '../../css/o/o13nptb0a.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="aow0tbtri wm-shadow"/><path class="b-oy3bbci"/><path class="evke8cc5m"/><path class="xruz2cblj"/><path class="b_m7pqbiv wm-shine"/><path class="o13nptb0a wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`,
		"fallback": "withicons-sticker:ghost",
	});
}

export default Component;
