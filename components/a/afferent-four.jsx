import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i0tj37ans.css';
import '../../css/b/b34ijxg3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="i0tj37ans"/><path class="b34ijxg3u"/></g>`,
		"fallback": "icon-park-outline:afferent-four",
	});
}

export default Component;
