import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj9cgxb4q.css';
import '../../css/w/wprsklb5k.css';
import '../../css/b/bupxdcvvv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj9cgxb4q"/><path class="wprsklb5k"/><path class="bupxdcvvv"/>`,
		"fallback": "tabler-flags:bulgaria",
	});
}

export default Component;
