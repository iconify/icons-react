import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbx5zccce.css';
import '../../css/h/h1-nu3ycy.css';
import '../../css/q/qlt2pdhtt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbx5zccce"/><path class="h1-nu3ycy"/><path class="qlt2pdhtt"/>`,
		"fallback": "energy-icons:house-hydrogen-20",
	});
}

export default Component;
