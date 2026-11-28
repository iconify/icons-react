import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz2v2pcnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz2v2pcnn"/>`,
		"fallback": "iconaut:cassette-solid",
	});
}

export default Component;
