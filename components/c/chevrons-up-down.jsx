import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/v7wmccwpt.css';
import '../../css/o/o91nyjbsc.css';
import '../../css/a/ae7wuqb-f.css';
import '../../css/m/mmmrlvbyw.css';
import '../../css/e/euhhz9uwc.css';
import '../../css/x/xzj-lcb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="v7wmccwpt wm-shadow"/><path class="o91nyjbsc"/><path class="ae7wuqb-f"/><path class="mmmrlvbyw"/><path class="euhhz9uwc wm-shine"/><path class="wm-deco xzj-lcb7w"/></g>`,
		"fallback": "withicons-sticker:chevrons-up-down",
	});
}

export default Component;
