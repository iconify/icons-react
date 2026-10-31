import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dnujpcble.css';
import '../../css/k/ku4l5i70j.css';
import '../../css/r/rj4mzr9jm.css';
import '../../css/q/qyqc2fifu.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dnujpcble"/><path class="ku4l5i70j wm-shine"/><path class="rj4mzr9jm wm-k"/><path class="qyqc2fifu wm-a"/><path class="v3bzhxbbh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:house-wifi",
	});
}

export default Component;
