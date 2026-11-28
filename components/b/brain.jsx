import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yznny6i3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yznny6i3z"/>`,
		"fallback": "noviair:brain",
	});
}

export default Component;
