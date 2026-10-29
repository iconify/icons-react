import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ya54ocmxk.css';
import '../../css/i/i54m6-fqy.css';
import '../../css/s/s53jcxmyz.css';
import '../../css/m/mexbxv5go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k ya54ocmxk"/><path class="i54m6-fqy wm-shadow"/><path class="s53jcxmyz wm-k"/><path class="mexbxv5go wm-a"/></g>`,
		"fallback": "withicons:fence-engrave",
	});
}

export default Component;
