import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hupxt07cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hupxt07cu"/>`,
		"fallback": "streamline-ultimate:business-lucky-cat-bold",
	});
}

export default Component;
