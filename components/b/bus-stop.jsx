import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8xtshbed.css';
import '../../css/h/h2v41sbws.css';
import '../../css/n/navu6kb3r.css';
import '../../css/v/v087bexer.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/s/s1nk110vg.css';
import '../../css/w/whsu61bqp.css';
import '../../css/a/aabesjb6a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGYy3ARb8A" class="q8xtshbed"/></defs><path class="h2v41sbws"/><path class="navu6kb3r"/><circle class="v087bexer"/><g class="ij2x_72vy"><path class="s1nk110vg"/><circle class="whsu61bqp"/><use href="#SVGYy3ARb8A"/></g><g class="aabesjb6a"><circle class="whsu61bqp"/><use href="#SVGYy3ARb8A"/></g>`,
		"fallback": "openmoji:bus-stop",
	});
}

export default Component;
