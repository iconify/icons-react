import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoz24cbfm.css';
import '../../css/g/g5rkwvecy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoz24cbfm"/><path class="g5rkwvecy"/>`,
		"fallback": "streamline-ultimate:desktop-monitor-smiley-bold",
	});
}

export default Component;
