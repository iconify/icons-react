import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsrbwcckl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsrbwcckl"/>`,
		"fallback": "noviair:circle-1",
	});
}

export default Component;
