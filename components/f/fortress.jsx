import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu1kso72z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu1kso72z"/>`,
		"fallback": "pinhead:fortress",
	});
}

export default Component;
