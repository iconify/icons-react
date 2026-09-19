import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8wyaabxc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8wyaabxc"/>`,
		"fallback": "fa6-solid:arrows-turn-right",
	});
}

export default Component;
