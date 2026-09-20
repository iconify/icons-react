import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chz62cc3y.css';
import '../../css/m/mxksfsbhx.css';
import '../../css/l/lg4yc5rft.css';
import '../../css/x/xhj_v8b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chz62cc3y"/><path class="mxksfsbhx"/><path class="lg4yc5rft"/><path class="xhj_v8b4g"/>`,
		"fallback": "uim:google-hangouts-alt",
	});
}

export default Component;
