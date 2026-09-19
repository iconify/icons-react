import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlob8ccer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlob8ccer"/>`,
		"fallback": "gg:arrows-exchange-alt-v",
	});
}

export default Component;
