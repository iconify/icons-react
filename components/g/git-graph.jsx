import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bjsh7rmdv.css';
import '../../css/m/mrpjhzbvf.css';
import '../../css/k/kogpadc5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bjsh7rmdv"/><path class="mrpjhzbvf wm-k"/><path class="kogpadc5i wm-a"/></g>`,
		"fallback": "withicons-kawaii:git-graph",
	});
}

export default Component;
