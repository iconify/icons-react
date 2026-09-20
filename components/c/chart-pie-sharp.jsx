import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx4nqn2vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx4nqn2vw"/>`,
		"fallback": "keyline-icons:chart-pie-sharp",
	});
}

export default Component;
