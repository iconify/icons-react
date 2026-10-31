import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rxpbo5nku.css';
import '../../css/c/c0bw40ovn.css';
import '../../css/s/skn8acc-z.css';
import '../../css/z/zif4qpbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="rxpbo5nku"/><path class="c0bw40ovn wm-k"/><path class="skn8acc-z wm-a"/><path class="wm-deco zif4qpbus"/></g>`,
		"fallback": "withicons-kawaii:chart-bar-decreasing",
	});
}

export default Component;
