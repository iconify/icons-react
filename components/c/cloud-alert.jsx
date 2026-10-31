import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9877gb7p.css';
import '../../css/g/gitttzbkh.css';
import '../../css/k/k5cqkmmir.css';
import '../../css/a/a7za05bng.css';
import '../../css/g/gwzm0yb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9877gb7p wm-k"/><path class="gitttzbkh wm-shine"/><path class="k5cqkmmir wm-shine"/><path class="a7za05bng wm-shine"/><path class="gwzm0yb6j wm-shine"/></g>`,
		"fallback": "withicons-lunar:cloud-alert",
	});
}

export default Component;
