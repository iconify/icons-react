import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx5kz2dev.css';
import '../../css/k/k98nskc3g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx5kz2dev"/><path class="k98nskc3g"/>`,
		"fallback": "energy-icons:charging-schedule-20",
	});
}

export default Component;
