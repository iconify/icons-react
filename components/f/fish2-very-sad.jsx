import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn7foxpmd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn7foxpmd"/>`,
		"fallback": "codicon:fish2-very-sad",
	});
}

export default Component;
