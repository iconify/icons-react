import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjfx5-b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjfx5-b3j"/>`,
		"fallback": "cbi:carrier",
	});
}

export default Component;
