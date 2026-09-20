import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp081n6cp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp081n6cp"/>`,
		"fallback": "reicon:folder4",
	});
}

export default Component;
