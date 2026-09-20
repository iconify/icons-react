import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwyl8uboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwyl8uboo"/>`,
		"fallback": "streamline-ultimate:blueprint-helmet-1",
	});
}

export default Component;
