import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdvrx72kk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdvrx72kk"/>`,
		"fallback": "pinhead:coffee-mug-with-steam",
	});
}

export default Component;
