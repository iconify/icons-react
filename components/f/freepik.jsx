import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz9z31bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz9z31bkv"/>`,
		"fallback": "thesvg:freepik",
	});
}

export default Component;
