import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk1jq-b8e.css';
import '../../css/x/x4l5l87lu.css';
import '../../css/c/crda83b7k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk1jq-b8e"/><path class="x4l5l87lu"/><path class="crda83b7k"/>`,
		"fallback": "energy-icons:goal-48-bold",
	});
}

export default Component;
