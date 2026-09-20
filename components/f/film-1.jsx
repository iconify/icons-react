import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crtx4ccqk.css';
import '../../css/s/sziea4gfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="crtx4ccqk"/><path class="sziea4gfj"/></g>`,
		"fallback": "tdesign:film-1",
	});
}

export default Component;
