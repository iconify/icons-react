import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqwls7bgu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqwls7bgu"/>`,
		"fallback": "entypo:bucket",
	});
}

export default Component;
