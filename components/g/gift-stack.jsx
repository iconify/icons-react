import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rg-6mqbtj.css';
import '../../css/e/ef_ff_j4i.css';
import '../../css/n/natiuwblb.css';
import '../../css/g/g6xqmd98j.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="rg-6mqbtj"/><path class="ef_ff_j4i wm-shine"/><path class="natiuwblb wm-k"/><path class="g6xqmd98j wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:gift-stack",
	});
}

export default Component;
