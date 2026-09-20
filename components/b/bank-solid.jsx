import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqglnrb0z.css';
import '../../css/s/s6o6votsb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqglnrb0z"/><path clip-rule="evenodd" class="s6o6votsb"/>`,
		"fallback": "teenyicons:bank-solid",
	});
}

export default Component;
