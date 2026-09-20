import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fchcg7aab.css';
import '../../css/b/bb6-6oplo.css';
import '../../css/a/af6c2lt3u.css';
import '../../css/q/qv1o886oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fchcg7aab"/><path class="bb6-6oplo"/><path class="af6c2lt3u"/><path class="qv1o886oj"/></g>`,
		"fallback": "si:album-duotone",
	});
}

export default Component;
