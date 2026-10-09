import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnkt3qb8k.css';
import '../../css/v/vl-e_fb9f.css';
import '../../css/f/f84_0wvks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnkt3qb8k"/><path class="vl-e_fb9f"/><path class="f84_0wvks"/>`,
		"fallback": "energy-icons:flower-48",
	});
}

export default Component;
