import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2tgqkvzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2tgqkvzc"/>`,
		"fallback": "streamline-ultimate:direction-button-2-bold",
	});
}

export default Component;
