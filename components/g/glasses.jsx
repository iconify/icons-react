import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik2cq9xgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik2cq9xgq"/>`,
		"fallback": "withicons-bauhaus:glasses",
	});
}

export default Component;
