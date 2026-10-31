import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jqizfzx9c.css';
import '../../css/t/t11oerbci.css';
import '../../css/k/k6spzkbhy.css';
import '../../css/e/e_ykywb7z.css';
import '../../css/k/k_ehq517i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jqizfzx9c wm-shadow"/><path class="t11oerbci"/><path class="k6spzkbhy"/><path class="e_ykywb7z"/><path class="k_ehq517i"/></g>`,
		"fallback": "withicons-retro:guitar",
	});
}

export default Component;
