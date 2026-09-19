import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m0xrrzbhk.css';
import '../../css/h/hffxopbeb.css';
import '../../css/l/li3jly3hg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="m0xrrzbhk"/><circle class="hffxopbeb"/><path class="li3jly3hg"/></g>`,
		"fallback": "icon-park:folder-search",
	});
}

export default Component;
