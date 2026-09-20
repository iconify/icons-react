import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dewchobuk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dewchobuk"/>`,
		"fallback": "pinhead:fish-head",
	});
}

export default Component;
