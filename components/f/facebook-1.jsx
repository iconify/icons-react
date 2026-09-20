import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qehczibes.css';
import '../../css/a/a0q8jibcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qehczibes"/><path class="a0q8jibcp"/></g>`,
		"fallback": "streamline-sharp:facebook-1",
	});
}

export default Component;
