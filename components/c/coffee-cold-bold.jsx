import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl35jpbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl35jpbvz"/>`,
		"fallback": "streamline-ultimate:coffee-cold-bold",
	});
}

export default Component;
