import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iku2hs7dx.css';
import '../../css/u/ukcxkub_e.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/k/kr3doob7g.css';
import '../../css/k/kl56jmaqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iku2hs7dx wm-deco"/><path class="ukcxkub_e wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="kr3doob7g wm-k"/><path class="kl56jmaqc wm-a"/></g>`,
		"fallback": "withicons:balloon-blueprint",
	});
}

export default Component;
