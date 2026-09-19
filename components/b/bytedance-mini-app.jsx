import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wj0ykybpb.css';
import '../../css/n/nelavn-zj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wj0ykybpb"/><path class="nelavn-zj"/></g>`,
		"fallback": "icon-park-outline:bytedance-mini-app",
	});
}

export default Component;
