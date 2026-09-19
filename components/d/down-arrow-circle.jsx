import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2o6bplzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2o6bplzc"/>`,
		"fallback": "bxs:down-arrow-circle",
	});
}

export default Component;
