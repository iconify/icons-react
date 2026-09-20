import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o480ntb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o480ntb8p"/>`,
		"fallback": "reicon:dollar-sign",
	});
}

export default Component;
