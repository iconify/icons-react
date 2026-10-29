import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hdieiup7l.css';
import '../../css/c/cokh2qemy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hdieiup7l"/><path class="cokh2qemy wm-a"/></g>`,
		"fallback": "withicons:cup-soda-solid",
	});
}

export default Component;
