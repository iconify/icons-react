import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moehyo9mv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moehyo9mv"/>`,
		"fallback": "pinhead:broadleaved-tree",
	});
}

export default Component;
