import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcntbabxn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcntbabxn"/>`,
		"fallback": "pinhead:guyed-mast-with-antenna-array",
	});
}

export default Component;
