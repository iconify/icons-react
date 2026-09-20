import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq-dyqsyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq-dyqsyp"/>`,
		"fallback": "streamline-ultimate:css-1-bold",
	});
}

export default Component;
