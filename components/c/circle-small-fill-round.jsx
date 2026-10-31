import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoko45bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoko45bfl"/>`,
		"fallback": "coolicons:circle-small-fill-round",
	});
}

export default Component;
