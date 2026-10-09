import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbx5zccce.css';
import '../../css/z/zrqlkvb4c.css';
import '../../css/w/w-8r-b8kp.css';
import '../../css/t/tna6zhb3s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbx5zccce"/><path class="zrqlkvb4c"/><path class="w-8r-b8kp"/><path class="tna6zhb3s"/>`,
		"fallback": "energy-icons:house-snowflake-20",
	});
}

export default Component;
