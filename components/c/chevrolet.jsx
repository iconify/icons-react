import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egaei1gbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egaei1gbk"/>`,
		"fallback": "simple-icons:chevrolet",
	});
}

export default Component;
