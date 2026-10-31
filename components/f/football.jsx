import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dvjdoibep.css';
import '../../css/d/db9jeob8v.css';
import '../../css/u/uch55rsgo.css';
import '../../css/v/vh5fw88hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dvjdoibep"/><path class="db9jeob8v wm-shine"/><path class="uch55rsgo wm-k"/><path class="vh5fw88hk wm-a"/></g>`,
		"fallback": "withicons-kawaii:football",
	});
}

export default Component;
