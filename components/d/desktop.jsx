import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm88dynrf.css';
import '../../css/l/lw3j3-rpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cm88dynrf"/><path class="lw3j3-rpw"/></g>`,
		"fallback": "tdesign:desktop",
	});
}

export default Component;
