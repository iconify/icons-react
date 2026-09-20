import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/m/m4ty168rl.css';
import '../../css/n/np7acnzsx.css';
import '../../css/k/kpfm4btix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="m4ty168rl"/><path class="np7acnzsx"/><path class="kpfm4btix"/></g>`,
		"fallback": "streamline-kameleon-color:download-cloud",
	});
}

export default Component;
