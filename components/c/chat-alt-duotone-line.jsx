import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/e/eygv3397z.css';
import '../../css/b/bqqq5-9ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><path class="eygv3397z"/><path class="bqqq5-9ri"/></g>`,
		"fallback": "lets-icons:chat-alt-duotone-line",
	});
}

export default Component;
