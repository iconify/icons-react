import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sm8yhmbew.css';
import '../../css/m/mem74i13c.css';
import '../../css/q/qwrl1299h.css';
import '../../css/h/hapjozblf.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sm8yhmbew"/><path class="mem74i13c wm-shine"/><path class="qwrl1299h wm-k"/><path class="hapjozblf wm-a"/><path class="ugzrm7bka wm-deco"/></g>`,
		"fallback": "withicons-kawaii:beer",
	});
}

export default Component;
