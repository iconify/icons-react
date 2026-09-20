import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tys5xt2qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tys5xt2qf"/>`,
		"fallback": "streamline-ultimate:cursor-target-1",
	});
}

export default Component;
