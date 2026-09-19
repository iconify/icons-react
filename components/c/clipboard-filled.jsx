import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l17hfdciu.css';
import '../../css/g/ge547rg0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l17hfdciu"/><path class="ge547rg0q"/>`,
		"fallback": "boxicons:clipboard-filled",
	});
}

export default Component;
