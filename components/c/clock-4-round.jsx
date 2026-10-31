import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfz9_616p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfz9_616p"/>`,
		"fallback": "coolicons:clock-4-round",
	});
}

export default Component;
