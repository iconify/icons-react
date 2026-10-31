import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fdxuutbbt.css';
import '../../css/h/hl8zpwdjy.css';
import '../../css/i/inajs0nql.css';
import '../../css/f/fzlatcc_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fdxuutbbt"/><path class="hl8zpwdjy wm-shine"/><path class="inajs0nql wm-k"/><path class="fzlatcc_e wm-a"/></g>`,
		"fallback": "withicons-kawaii:door-open",
	});
}

export default Component;
