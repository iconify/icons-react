import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yxrw5gbvw.css';
import '../../css/f/fnba-4b3q.css';
import '../../css/p/ppj72pith.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yxrw5gbvw"/><path class="fnba-4b3q"/><path class="ppj72pith"/></g>`,
		"fallback": "keyline-icons:git-fork-sharp-two-tone",
	});
}

export default Component;
