import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-n6ud5vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-n6ud5vm"/>`,
		"fallback": "mdi:credit-card-fast",
	});
}

export default Component;
