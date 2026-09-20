import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5s1lcbbn.css';
import '../../css/d/dh2sg1pzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5s1lcbbn"/><path class="dh2sg1pzk"/>`,
		"fallback": "streamline-ultimate:common-file-give-hand-3-bold",
	});
}

export default Component;
