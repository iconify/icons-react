import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrw163bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrw163bkx"/>`,
		"fallback": "sidekickicons:hammer",
	});
}

export default Component;
