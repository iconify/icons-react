import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8qmtb0vg.css';
import '../../css/w/wvqn8smga.css';
import '../../css/l/l85zn4b0m.css';
import '../../css/t/tqx96999q.css';
import '../../css/o/otjwedhbq.css';
import '../../css/n/n-inml2tz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="scale(3.77953)" class="i8qmtb0vg"><rect class="wvqn8smga"/><path class="l85zn4b0m"/><path class="tqx96999q"/><path class="otjwedhbq"/><circle class="n-inml2tz"/></g>`,
		"fallback": "gala:image",
	});
}

export default Component;
