import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4spwt7oj.css';
import '../../css/u/utvngb1dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4spwt7oj"/><path class="utvngb1dp"/>`,
		"fallback": "eos-icons:content-deleted",
	});
}

export default Component;
