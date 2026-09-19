import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oky91eb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oky91eb4w"/>`,
		"fallback": "gg:close",
	});
}

export default Component;
