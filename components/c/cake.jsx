import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iqyfnccjz.css';
import '../../css/h/h8rvyfble.css';
import '../../css/y/yhtn9ti7t.css';
import '../../css/f/fiogixb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="iqyfnccjz"/><path class="h8rvyfble wm-shine"/><path class="wm-k yhtn9ti7t"/><path class="fiogixb5h wm-a"/></g>`,
		"fallback": "withicons-kawaii:cake",
	});
}

export default Component;
