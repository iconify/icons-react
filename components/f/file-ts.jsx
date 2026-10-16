import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8njgsmna.css';
import '../../css/g/g8klr6byk.css';
import '../../css/p/pirh50b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8njgsmna"/><path class="g8klr6byk"/><path class="pirh50b0u"/></g>`,
		"fallback": "andrsrxn:file-ts",
	});
}

export default Component;
