import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/lept75j3w.css';
import '../../css/m/m7gx5pnrs.css';
import '../../css/j/jxy19bnzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="lept75j3w"/><path class="m7gx5pnrs"/><path class="jxy19bnzs"/></g>`,
		"fallback": "lets-icons:covert-light",
	});
}

export default Component;
