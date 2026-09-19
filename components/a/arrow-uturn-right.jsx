import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrb82ox7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrb82ox7f"/>`,
		"fallback": "heroicons-outline:arrow-uturn-right",
	});
}

export default Component;
