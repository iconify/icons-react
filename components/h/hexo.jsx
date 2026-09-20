import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shypuabyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shypuabyu"/>`,
		"fallback": "thesvg-color:hexo",
	});
}

export default Component;
