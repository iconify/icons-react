import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdxq43g1p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdxq43g1p"/>`,
		"fallback": "pinhead:barbecue-grill-with-steam",
	});
}

export default Component;
