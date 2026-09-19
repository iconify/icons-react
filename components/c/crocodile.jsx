import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2bgocb9a.css';
import '../../css/f/fne9igb5l.css';
import '../../css/t/tuu7tm3bw.css';
import '../../css/w/wkue1tbgt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r2bgocb9a"/><path class="fne9igb5l"/><path class="tuu7tm3bw"/><path class="wkue1tbgt"/></g>`,
		"fallback": "fluent-emoji-flat:crocodile",
	});
}

export default Component;
