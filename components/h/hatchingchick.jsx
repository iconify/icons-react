import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtbsphbxc.css';
import '../../css/o/ozp-gmbzh.css';
import '../../css/d/dneqyku5s.css';
import '../../css/a/a037hmb_i.css';
import '../../css/a/apogh5b8k.css';
import '../../css/g/gktr2bb-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtbsphbxc"/><path class="ozp-gmbzh"/><path class="dneqyku5s"/><path class="a037hmb_i"/><path class="apogh5b8k"/><path class="gktr2bb-u"/>`,
		"fallback": "fxemoji:hatchingchick",
	});
}

export default Component;
