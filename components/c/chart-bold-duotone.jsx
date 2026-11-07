import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogok9o5lk.css';
import '../../css/w/wzlj4ldvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ogok9o5lk"/><path class="wzlj4ldvm"/>`,
		"fallback": "solar:chart-bold-duotone",
	});
}

export default Component;
