import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssindxbui.css';
import '../../css/g/gn6tg6yxx.css';
import '../../css/n/n5rz3-yrd.css';
import '../../css/c/c7pyt_b5t.css';
import '../../css/i/ir3n52bxc.css';
import '../../css/l/l9wjs6rfd.css';
import '../../css/o/orxibkbfi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ssindxbui"/><path class="gn6tg6yxx"/><path class="n5rz3-yrd"/><path class="c7pyt_b5t"/><path class="ir3n52bxc"/><path class="l9wjs6rfd"/><path class="orxibkbfi"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-steam-from-nose",
	});
}

export default Component;
