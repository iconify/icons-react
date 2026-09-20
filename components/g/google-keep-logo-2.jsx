import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lyyvkgbuo.css';
import '../../css/y/ylbyunbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lyyvkgbuo"/><path class="ylbyunbil"/></g>`,
		"fallback": "streamline-ultimate:google-keep-logo-2",
	});
}

export default Component;
