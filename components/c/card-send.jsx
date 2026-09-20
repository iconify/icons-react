import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxts2hb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yxts2hb4f"/>`,
		"fallback": "reicon:card-send",
	});
}

export default Component;
