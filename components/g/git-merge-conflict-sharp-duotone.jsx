import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o3u_lwbit.css';
import '../../css/a/abl_1jb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o3u_lwbit"/><path class="abl_1jb3x"/></g>`,
		"fallback": "keyline-icons:git-merge-conflict-sharp-duotone",
	});
}

export default Component;
