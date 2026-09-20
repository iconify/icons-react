import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/x2tqp1bzh.css';
import '../../css/c/c74vzxphf.css';
import '../../css/t/ter52db6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="x2tqp1bzh"/><path class="c74vzxphf"/><path class="ter52db6t"/></g>`,
		"fallback": "streamline-logos:discord-logo-2",
	});
}

export default Component;
