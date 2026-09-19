import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcphm1b1a.css';
import '../../css/q/qr8v-fsjr.css';
import '../../css/n/na3qbybwq.css';
import '../../css/x/x02k33bom.css';
import '../../css/s/sa4l94btj.css';
import '../../css/y/ypz4v_41x.css';
import '../../css/s/sjkdkgb1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bcphm1b1a"/><path class="qr8v-fsjr"/><path class="na3qbybwq"/><path class="x02k33bom"/><path class="sa4l94btj"/><path class="ypz4v_41x"/><path class="sjkdkgb1n"/></g>`,
		"fallback": "fluent-emoji-flat:fire-extinguisher",
	});
}

export default Component;
