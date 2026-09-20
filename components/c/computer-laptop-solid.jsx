import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw34_3bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw34_3bgw"/>`,
		"fallback": "sidekickicons:computer-laptop-solid",
	});
}

export default Component;
