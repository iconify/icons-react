import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/twxqgt_ca.css';
import '../../css/y/yrlyq9bep.css';
import '../../css/h/hf_ak9q6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="twxqgt_ca wm-k"/><path class="wm-k yrlyq9bep"/><path class="hf_ak9q6y wm-a"/></g>`,
		"fallback": "withicons:captions-sketch",
	});
}

export default Component;
