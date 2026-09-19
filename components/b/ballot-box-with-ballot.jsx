import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzuuvqboe.css';
import '../../css/r/r_-3_ibwl.css';
import '../../css/f/fupu7vskw.css';
import '../../css/x/xkgzte5hj.css';
import '../../css/m/m1uf2obbn.css';
import '../../css/l/ltqpd9bmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uzuuvqboe"/><path class="r_-3_ibwl"/><path class="fupu7vskw"/><path class="xkgzte5hj"/><path class="m1uf2obbn"/><path class="ltqpd9bmd"/></g>`,
		"fallback": "fluent-emoji-flat:ballot-box-with-ballot",
	});
}

export default Component;
