import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/c/cg3thxbgs.css';
import '../../css/h/hbjm60bpx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ftpkt8zyt"/><circle class="cg3thxbgs"/><path class="hbjm60bpx"/></g>`,
		"fallback": "icon-park-outline:file-settings-one",
	});
}

export default Component;
