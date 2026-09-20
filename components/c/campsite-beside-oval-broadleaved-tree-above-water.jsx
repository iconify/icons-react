import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7_5l5l3y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7_5l5l3y"/>`,
		"fallback": "pinhead:campsite-beside-oval-broadleaved-tree-above-water",
	});
}

export default Component;
