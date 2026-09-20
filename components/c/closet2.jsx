import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rigzz57ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rigzz57ml"/>`,
		"fallback": "reicon:closet2",
	});
}

export default Component;
