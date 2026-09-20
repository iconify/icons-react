import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e27cdebky.css';
import '../../css/y/yjuc4p29b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e27cdebky"/><path class="yjuc4p29b"/>`,
		"fallback": "prime:euro",
	});
}

export default Component;
