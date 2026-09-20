import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyd9tlbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyd9tlbpe"/>`,
		"fallback": "tdesign:clear-formatting-1-filled",
	});
}

export default Component;
