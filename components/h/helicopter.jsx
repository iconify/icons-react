import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/oa271hoes.css';
import '../../css/q/qtwcg3lly.css';
import '../../css/g/gcxslfe-p.css';
import '../../css/b/bt7scxyyw.css';
import '../../css/u/ui38c_2aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="oa271hoes"/><path class="qtwcg3lly"/><path class="gcxslfe-p wm-shine"/><path class="bt7scxyyw wm-k"/><path class="ui38c_2aq wm-a"/></g>`,
		"fallback": "withicons-kawaii:helicopter",
	});
}

export default Component;
