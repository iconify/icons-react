import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybn-wvb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybn-wvb3f"/>`,
		"fallback": "thesvg:bluetooth",
	});
}

export default Component;
