import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/c/c3f8qryzp.css';
import '../../css/f/fo4ccr_rl.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/p/pdlz6-byt.css';
import '../../css/l/l-47ud-_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="c3f8qryzp"/><path class="fo4ccr_rl"/><g class="av3m8fbrw"><path class="pdlz6-byt"/><path class="l-47ud-_g"/></g></g>`,
		"fallback": "tdesign:dart-board",
	});
}

export default Component;
