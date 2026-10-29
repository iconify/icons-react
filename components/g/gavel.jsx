import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvl3zgbut.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/o66g_st2g.css';
import '../../css/i/i3w7_ebsw.css';
import '../../css/y/y9agl9eav.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9us8v3uz.css';
import '../../css/b/bim3yxj9i.css';
import '../../css/c/ccdkuv5sf.css';
import '../../css/f/f6zwt1bvj.css';
import '../../css/z/z13ns-w-g.css';
import '../../css/g/g9m93ac7r.css';
import '../../css/m/mg4aiccgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGMGSEnevO" class="lvl3zgbut"/></defs><g class="t_2lkqbxb"><path class="o66g_st2g wm-shadow"/><path class="i3w7_ebsw"/><path class="y9agl9eav"/><use href="#SVGMGSEnevO" class="d2kvgvbvc"/><path class="d9us8v3uz"/><use href="#SVGMGSEnevO" class="d2kvgvbvc"/><path class="bim3yxj9i"/><path class="ccdkuv5sf wm-s"/><path class="f6zwt1bvj wm-s"/><path class="wm-s z13ns-w-g"/><path class="g9m93ac7r wm-deco"/><path class="mg4aiccgc wm-deco"/></g>`,
		"fallback": "withicons-sticker:gavel",
	});
}

export default Component;
