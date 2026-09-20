import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q77133j5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q77133j5n"/>`,
		"fallback": "simple-icons:gamemaker",
	});
}

export default Component;
