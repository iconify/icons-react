import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/my-kiubtd.css';
import '../../css/y/y_ysbobud.css';
import '../../css/g/gm2_kxtdf.css';
import '../../css/f/f25-q0bpb.css';
import '../../css/k/kf6-d7bht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="my-kiubtd"/><path class="y_ysbobud"/><path class="gm2_kxtdf"/><path class="f25-q0bpb"/><path class="kf6-d7bht"/></g>`,
		"fallback": "icon-park-outline:envelope-one",
	});
}

export default Component;
