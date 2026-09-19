import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yi3o85hux.css';
import '../../css/r/rdgo48b8m.css';
import '../../css/d/d0g3f584s.css';
import '../../css/j/jclj8ybov.css';
import '../../css/u/ucdn1fbrw.css';
import '../../css/m/m_dfucb3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yi3o85hux"/><path clip-rule="evenodd" class="rdgo48b8m"/><path clip-rule="evenodd" class="d0g3f584s"/><path clip-rule="evenodd" class="jclj8ybov"/><ellipse transform="matrix(0 -1 -1 0 6 25)" class="ucdn1fbrw"/><ellipse transform="matrix(0 -1 -1 0 5 23)" class="m_dfucb3s"/></g>`,
		"fallback": "fluent-emoji-flat:ginger-root",
	});
}

export default Component;
