import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6uklktlq.css';
import '../../css/k/kk94-14if.css';
import '../../css/x/xitnz62wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6uklktlq"/><path class="kk94-14if"/><path clip-rule="evenodd" class="xitnz62wd"/>`,
		"fallback": "solar:donut-bold",
	});
}

export default Component;
