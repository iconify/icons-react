import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mumyvlh7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mumyvlh7h"/>`,
		"fallback": "coolicons:arrow-left-right-round",
	});
}

export default Component;
