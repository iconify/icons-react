import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q30rolp3j.css';
import '../../css/f/f-b420_xl.css';
import '../../css/e/etqnjha5v.css';
import '../../css/n/n8dsurkgv.css';
import '../../css/t/tq9yzjbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="q30rolp3j"/><path class="f-b420_xl wm-shine"/><path class="etqnjha5v wm-k"/><path class="n8dsurkgv wm-a"/><path class="tq9yzjbwu wm-deco"/></g>`,
		"fallback": "withicons-kawaii:brain",
	});
}

export default Component;
