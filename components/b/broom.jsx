import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l80eh7bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l80eh7bjl"/>`,
		"fallback": "noviair:broom",
	});
}

export default Component;
