import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c48s32eie.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c48s32eie"/>`,
		"fallback": "pinhead:campsite-beside-oval-broadleaved-tree",
	});
}

export default Component;
