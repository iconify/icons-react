import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhk9d3brv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhk9d3brv"/>`,
		"fallback": "dinkie-icons:cool-box",
	});
}

export default Component;
