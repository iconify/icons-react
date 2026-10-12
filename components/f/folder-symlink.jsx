import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu8nad1hp.css';
import '../../css/v/v9imsxm7v.css';
import '../../css/j/jsl-hczry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bu8nad1hp"/><path class="v9imsxm7v"/><path class="jsl-hczry"/></g>`,
		"fallback": "andrsrxn:folder-symlink",
	});
}

export default Component;
