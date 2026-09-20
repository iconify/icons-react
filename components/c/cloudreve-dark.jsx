import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls_ypjbmg.css';
import '../../css/u/ucj4b1l1e.css';
import '../../css/g/g4v7ni7qx.css';
import '../../css/r/rqa_vtz4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls_ypjbmg"/><circle class="ucj4b1l1e"/><path class="g4v7ni7qx"/><path class="rqa_vtz4c"/>`,
		"fallback": "selfhst:cloudreve-dark",
	});
}

export default Component;
