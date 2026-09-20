import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6bvuxdzg.css';
import '../../css/k/kjb5hb_6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6bvuxdzg"/><path class="kjb5hb_6m"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-detect-virus-monitor-search-bold",
	});
}

export default Component;
