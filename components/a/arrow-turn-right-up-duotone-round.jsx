import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juufe7eyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juufe7eyi"/>`,
		"fallback": "coolicons:arrow-turn-right-up-duotone-round",
	});
}

export default Component;
