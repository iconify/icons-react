import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bylw7jbya.css';
import '../../css/x/xm929l28t.css';
import '../../css/e/ec85-rcyc.css';
import '../../css/i/i5iq5xaql.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bylw7jbya"/><path clip-rule="evenodd" class="xm929l28t"/><path class="ec85-rcyc"/><path clip-rule="evenodd" class="i5iq5xaql"/></g>`,
		"fallback": "glyphs:comment-info-outline",
	});
}

export default Component;
