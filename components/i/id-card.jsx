import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ok2g69b1z.css';
import '../../css/l/l71j435fl.css';
import '../../css/v/vkgg09bpx.css';
import '../../css/e/euj49csjz.css';
import '../../css/t/t5_54pbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ok2g69b1z"/><path class="l71j435fl"/><path class="vkgg09bpx wm-shine"/><path class="euj49csjz wm-k"/><path class="t5_54pbtg wm-a"/></g>`,
		"fallback": "withicons-kawaii:id-card",
	});
}

export default Component;
