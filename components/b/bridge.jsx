import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9_jtcbed.css';
import '../../css/b/b1uw7cbks.css';
import '../../css/q/qd2rdm9ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9_jtcbed"/><path class="b1uw7cbks"/><path class="qd2rdm9ve"/>`,
		"fallback": "token:bridge",
	});
}

export default Component;
