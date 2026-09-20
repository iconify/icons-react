import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-qo2ebal.css';
import '../../css/h/hu8pocc6e.css';
import '../../css/n/n0digdb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o-qo2ebal"/><path class="hu8pocc6e"/><path class="n0digdb4w"/></g>`,
		"fallback": "tdesign:brush",
	});
}

export default Component;
