import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_xy3blpc.css';
import '../../css/l/lewmoqbmp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_xy3blpc"/><path class="lewmoqbmp"/>`,
		"fallback": "energy-icons:chart-pie-slice-20",
	});
}

export default Component;
