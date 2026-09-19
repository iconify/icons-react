import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lruj0drqg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lruj0drqg"/>`,
		"fallback": "f7:circle-grid-3x3",
	});
}

export default Component;
