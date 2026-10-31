import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/ptq85obuz.css';
import '../../css/v/vjaxozbzk.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/g/g08_iwjzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ptq85obuz"/><path class="vjaxozbzk wm-shine"/><path class="m2ebxhp-u wm-k"/><path class="g08_iwjzd wm-s"/></g>`,
		"fallback": "withicons-kawaii:cloud-upload",
	});
}

export default Component;
