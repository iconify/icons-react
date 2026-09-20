import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nokox8bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nokox8bjs"/>`,
		"fallback": "streamline-sharp:insert-top-left",
	});
}

export default Component;
