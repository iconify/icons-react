import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pd9ve-4jk.css';
import '../../css/w/w3r548b8g.css';
import '../../css/z/zgkec2ftu.css';
import '../../css/p/p6qg516ed.css';
import '../../css/h/hrnbbwbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pd9ve-4jk"/><path class="w3r548b8g"/><path class="zgkec2ftu"/><path class="p6qg516ed"/><path class="hrnbbwbro"/></g>`,
		"fallback": "solar:figma-line-duotone",
	});
}

export default Component;
