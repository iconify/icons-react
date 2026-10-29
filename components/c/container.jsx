import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b43u7vb1d.css';
import '../../css/b/bhe0ybcvt.css';
import '../../css/x/xhn2ytbsr.css';
import '../../css/s/sdh6_i4nc.css';
import '../../css/e/eeh5yoz5p.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="b43u7vb1d wm-shadow"/><path class="bhe0ybcvt"/><path class="xhn2ytbsr"/><path class="sdh6_i4nc"/><path class="eeh5yoz5p wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`,
		"fallback": "withicons-sticker:container",
	});
}

export default Component;
