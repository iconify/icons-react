import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pecbn_bfw.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pecbn_bfw"/>`,
		"fallback": "wi:direction-up-left",
	});
}

export default Component;
