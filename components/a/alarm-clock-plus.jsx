import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfao_98jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfao_98jr"/>`,
		"fallback": "hugeicons:alarm-clock-plus",
	});
}

export default Component;
