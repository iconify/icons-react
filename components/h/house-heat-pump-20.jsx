import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbx5zccce.css';
import '../../css/d/dclfrbcuw.css';
import '../../css/e/e9nmf_btt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbx5zccce"/><path class="dclfrbcuw"/><path class="e9nmf_btt"/>`,
		"fallback": "energy-icons:house-heat-pump-20",
	});
}

export default Component;
