import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5f05obqd.css';
import '../../css/i/idcl1o6gj.css';
import '../../css/x/xqz-l_kst.css';
import '../../css/n/n_9fa2idq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5f05obqd"/><path class="idcl1o6gj"/><path class="xqz-l_kst"/><path class="n_9fa2idq"/></g>`,
		"fallback": "glyphs:bell-exclamation-duo",
	});
}

export default Component;
