import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcblk8xwp.css';
import '../../css/d/d20oh2rng.css';
import '../../css/x/xvk98q32j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bcblk8xwp"/><path class="d20oh2rng"/><path class="xvk98q32j"/></g>`,
		"fallback": "streamline-ultimate-color:cog",
	});
}

export default Component;
