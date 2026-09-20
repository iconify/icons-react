import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lvwbaqb1f.css';
import '../../css/g/g1jyq1e1a.css';
import '../../css/k/kfalkfbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lvwbaqb1f"/><path clip-rule="evenodd" class="g1jyq1e1a"/><path class="kfalkfbzo"/></g>`,
		"fallback": "reicon:clapperboard-edit-duotone",
	});
}

export default Component;
