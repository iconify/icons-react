import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/d/d8zydsb_d.css';
import '../../css/k/klxy3db1q.css';
import '../../css/n/ndzj4xqgh.css';
import '../../css/m/mnj31bc4i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="d8zydsb_d"/><path class="klxy3db1q"/><path class="ndzj4xqgh"/><path class="mnj31bc4i"/></g>`,
		"fallback": "icon-park-outline:click-tap",
	});
}

export default Component;
