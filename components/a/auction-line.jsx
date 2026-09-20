import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnv13yfyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnv13yfyf"/>`,
		"fallback": "ri:auction-line",
	});
}

export default Component;
