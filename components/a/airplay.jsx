import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8p7xqizv.css';
import '../../css/i/ircx_pb5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8p7xqizv"/><path class="ircx_pb5h"/>`,
		"fallback": "carbon:airplay",
	});
}

export default Component;
