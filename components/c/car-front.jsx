import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kojh02b5g.css';
import '../../css/w/wlfqy-bxm.css';
import '../../css/g/gighltbwr.css';
import '../../css/b/b4d1e6bie.css';
import '../../css/w/wcpe8eb7b.css';
import '../../css/e/e78k15v9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kojh02b5g"/><path class="wlfqy-bxm"/><path class="gighltbwr wm-shine"/><path class="b4d1e6bie wm-k"/><path class="wcpe8eb7b wm-a"/><path class="e78k15v9f wm-deco"/></g>`,
		"fallback": "withicons-kawaii:car-front",
	});
}

export default Component;
