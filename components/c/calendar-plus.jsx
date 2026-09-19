import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgfg_vrnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgfg_vrnc"/>`,
		"fallback": "ci:calendar-plus",
	});
}

export default Component;
