import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq4cngnfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq4cngnfc"/>`,
		"fallback": "tabler:flip-vertical",
	});
}

export default Component;
