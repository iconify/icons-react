import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fh86zsybk.css';
import '../../css/b/b_x0yvbhh.css';
import '../../css/r/r0y4ez2qx.css';
import '../../css/a/a7amheb1w.css';
import '../../css/c/ctmau1ccj.css';
import '../../css/k/ku8s8wyil.css';
import '../../css/x/x0e9q4bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fh86zsybk wm-shadow"/><path class="b_x0yvbhh"/><path class="r0y4ez2qx"/><path class="a7amheb1w"/><path class="ctmau1ccj"/><path class="ku8s8wyil wm-shine"/><path class="wm-deco x0e9q4bew"/></g>`,
		"fallback": "withicons-sticker:gingerbread-man",
	});
}

export default Component;
