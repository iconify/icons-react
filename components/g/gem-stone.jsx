import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwxrdjb2q.css';
import '../../css/h/hlqttbbal.css';
import '../../css/b/b0iu9jasg.css';
import '../../css/h/hqhnle6yb.css';
import '../../css/q/qia7s-b0w.css';
import '../../css/e/ep5dqgblx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wwxrdjb2q"/><path class="hlqttbbal"/><path class="b0iu9jasg"/><path class="hqhnle6yb"/><path class="qia7s-b0w"/><path class="ep5dqgblx"/></g>`,
		"fallback": "fluent-emoji-flat:gem-stone",
	});
}

export default Component;
