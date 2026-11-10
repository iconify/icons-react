import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bijngw2ra.css';
import '../../css/b/b5_vewwzn.css';
import '../../css/s/s38cgmg8p.css';
import '../../css/x/xi4f7vbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bijngw2ra"/><path clip-rule="evenodd" class="b5_vewwzn"/><path class="s38cgmg8p"/><path class="xi4f7vbnp"/></g>`,
		"fallback": "andrsrxn:article-sparkle",
	});
}

export default Component;
