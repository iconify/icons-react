import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hmhv31bxt.css';
import '../../css/s/slw3rea1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="briefcase-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="hmhv31bxt"/><path class="slw3rea1g"/></g></g>`,
		"fallback": "cuida:briefcase-outline",
	});
}

export default Component;
