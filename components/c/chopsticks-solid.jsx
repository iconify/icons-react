import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rrq9d2wqw.css';
import '../../css/u/uk_u3b5yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rrq9d2wqw"/><path class="uk_u3b5yn wm-a"/></g>`,
		"fallback": "withicons:chopsticks-solid",
	});
}

export default Component;
