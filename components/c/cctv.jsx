import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y1yexiblt.css';
import '../../css/j/je_ougb0a.css';
import '../../css/z/ze1x51aor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="y1yexiblt"/><path class="je_ougb0a"/><path class="ze1x51aor"/></g>`,
		"fallback": "withicons-bauhaus:cctv",
	});
}

export default Component;
