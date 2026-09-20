import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x2k-pbckj.css';
import '../../css/y/yyffa3bjo.css';
import '../../css/u/u3620mbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x2k-pbckj"/><path class="yyffa3bjo"/><path class="u3620mbgy"/></g>`,
		"fallback": "streamline-sharp:bill-4",
	});
}

export default Component;
