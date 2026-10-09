import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cozw5lxrq.css';
import '../../css/w/wkvt3obva.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cozw5lxrq"/><path class="wkvt3obva"/>`,
		"fallback": "energy-icons:electrolyser-20",
	});
}

export default Component;
