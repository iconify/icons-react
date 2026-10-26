import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfzmct09b.css';
import '../../css/x/xkn94gxsg.css';

const viewBox = {"width":180,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfzmct09b"/><circle class="xkn94gxsg"/>`,
		"fallback": "thesvg:docuseal",
	});
}

export default Component;
