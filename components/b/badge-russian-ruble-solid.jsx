import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qszh7vb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qszh7vb_p"/>`,
		"fallback": "iconaut:badge-russian-ruble-solid",
	});
}

export default Component;
