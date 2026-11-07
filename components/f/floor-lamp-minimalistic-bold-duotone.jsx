import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5jjfybut.css';
import '../../css/x/xud1jdrvj.css';
import '../../css/w/wi29n-blt.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/muk10suzx.css';
import '../../css/y/y50g8dd4e.css';
import '../../css/x/xzxl5tpyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5jjfybut"/><path class="xud1jdrvj"/><path class="wi29n-blt"/><g class="xtpeb-edw"><path class="muk10suzx"/><path class="y50g8dd4e"/><path class="xzxl5tpyj"/></g>`,
		"fallback": "solar:floor-lamp-minimalistic-bold-duotone",
	});
}

export default Component;
