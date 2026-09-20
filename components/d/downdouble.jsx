import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpm3-ysuq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpm3-ysuq"/>`,
		"fallback": "picon:downdouble",
	});
}

export default Component;
