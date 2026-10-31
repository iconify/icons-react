import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dpndwwtgs.css';
import '../../css/m/mml7skbfj.css';
import '../../css/b/bht756bnp.css';
import '../../css/g/g136touho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dpndwwtgs"/><path class="mml7skbfj wm-shine"/><path class="bht756bnp wm-k"/><path class="g136touho wm-a"/></g>`,
		"fallback": "withicons-kawaii:app-window",
	});
}

export default Component;
