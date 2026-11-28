import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu94njbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu94njbui"/>`,
		"fallback": "noviair:cube-search",
	});
}

export default Component;
