import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpjga7cqk.css';
import '../../css/h/h2bmrpbsg.css';
import '../../css/y/y4i3220kc.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpjga7cqk"/><path class="h2bmrpbsg"/><path class="y4i3220kc"/><path class="zkdyo_ief"/>`,
		"fallback": "energy-icons:bell-plus-20",
	});
}

export default Component;
