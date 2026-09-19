import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q4bj7xbuk.css';
import '../../css/b/bk8ioe9xt.css';
import '../../css/d/disxecbqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q4bj7xbuk"/><circle class="bk8ioe9xt"/><path class="disxecbqq"/></g>`,
		"fallback": "icon-park-outline:file-staff",
	});
}

export default Component;
