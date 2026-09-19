import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/r/r7_3mv3yj.css';
import '../../css/i/i5g60itze.css';
import '../../css/y/y3ruezbdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="r7_3mv3yj"/><path class="i5g60itze"/><path class="y3ruezbdg"/></g>`,
		"fallback": "icon-park-outline:afferent-two",
	});
}

export default Component;
