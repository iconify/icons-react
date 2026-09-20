import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww7cr52rq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww7cr52rq"/>`,
		"fallback": "temaki:fashion-accessories",
	});
}

export default Component;
