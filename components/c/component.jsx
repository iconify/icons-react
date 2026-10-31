import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/awk3gltjq.css';
import '../../css/w/wr1htd5-j.css';
import '../../css/u/uabzkniwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="awk3gltjq"/><path class="wm-k wr1htd5-j"/><path class="uabzkniwf wm-a"/></g>`,
		"fallback": "withicons-kawaii:component",
	});
}

export default Component;
