import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg_m2acwj.css';
import '../../css/h/h2gb18b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg_m2acwj"/><path class="h2gb18b2h"/>`,
		"fallback": "boxicons:cog",
	});
}

export default Component;
