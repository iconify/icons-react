import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bz05qv17r.css';
import '../../css/h/hl1q2eb4f.css';
import '../../css/k/k6jcs9ioy.css';
import '../../css/n/nbe81kb-r.css';
import '../../css/s/se9kxb3qy.css';
import '../../css/h/ht7d-rmkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bz05qv17r"/><path class="hl1q2eb4f"/><path class="k6jcs9ioy"/><path class="nbe81kb-r"/><path class="se9kxb3qy"/><path class="ht7d-rmkw"/></g>`,
		"fallback": "streamline-ultimate-color:bookmarks-document",
	});
}

export default Component;
