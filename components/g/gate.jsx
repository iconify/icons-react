import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hez4fkboo.css';
import '../../css/v/vt-d02btz.css';
import '../../css/y/y93muob-f.css';
import '../../css/l/llofi2jzh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="hez4fkboo"/><path class="vt-d02btz"/><path class="y93muob-f"/><path class="llofi2jzh"/></g>`,
		"fallback": "icon-park-solid:gate",
	});
}

export default Component;
