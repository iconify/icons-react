import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kxy358b-l.css';
import '../../css/k/kfvqsfbkz.css';
import '../../css/b/baylgehlv.css';
import '../../css/u/uc2l5qcjv.css';
import '../../css/w/wfq8uz8wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kxy358b-l"/><path class="kfvqsfbkz"/><path class="baylgehlv wm-a"/><path class="uc2l5qcjv wm-a"/><path class="wfq8uz8wa wm-a"/></g>`,
		"fallback": "withicons:avatar-older-woman",
	});
}

export default Component;
