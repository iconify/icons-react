import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2f8b2rvm.css';
import '../../css/x/x6v_hdcvm.css';
import '../../css/f/fipt221up.css';
import '../../css/o/o4ntkwbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d2f8b2rvm"/><path class="x6v_hdcvm"/><path class="fipt221up"/><path class="o4ntkwbym"/></g>`,
		"fallback": "tdesign:houses",
	});
}

export default Component;
