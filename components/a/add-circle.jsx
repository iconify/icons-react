import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azlztwo3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azlztwo3n"/>`,
		"fallback": "hugeicons:add-circle",
	});
}

export default Component;
