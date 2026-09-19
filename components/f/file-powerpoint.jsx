import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx7kf_b7g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx7kf_b7g"/>`,
		"fallback": "fa7-solid:file-powerpoint",
	});
}

export default Component;
