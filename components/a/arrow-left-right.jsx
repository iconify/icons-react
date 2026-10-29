import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-gmum8gu.css';
import '../../css/m/m-dp6jb_c.css';
import '../../css/k/kjbif5bfj.css';
import '../../css/z/zmw3shyje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-gmum8gu wm-k"/><path class="m-dp6jb_c wm-k"/><path class="kjbif5bfj wm-k"/><path class="wm-shine zmw3shyje"/></g>`,
		"fallback": "withicons-anime:arrow-left-right",
	});
}

export default Component;
