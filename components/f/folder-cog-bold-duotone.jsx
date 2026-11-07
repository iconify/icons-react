import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2nrf10bf.css';
import '../../css/l/l44xgab5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2nrf10bf"/><path class="l44xgab5p"/>`,
		"fallback": "solar:folder-cog-bold-duotone",
	});
}

export default Component;
