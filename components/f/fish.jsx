import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u3wn5_whc.css';
import '../../css/b/bmk7ewkey.css';
import '../../css/k/kl2f2f0tw.css';
import '../../css/f/fm32n2byj.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u3wn5_whc"/><path class="bmk7ewkey wm-shine"/><path class="kl2f2f0tw wm-k"/><path class="fm32n2byj wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:fish",
	});
}

export default Component;
