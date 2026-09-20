import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jp6fnubkj.css';
import '../../css/w/wgkz9c3oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jp6fnubkj"/><path class="wgkz9c3oa"/></g>`,
		"fallback": "streamline-ultimate:hard-drive-1",
	});
}

export default Component;
