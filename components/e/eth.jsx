import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dbmfimb0q.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/a/axu8vacgl.css';
import '../../css/k/kouxvgbln.css';
import '../../css/g/gzzcnbppf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dbmfimb0q"/><g class="l5y23ru5w"><path class="axu8vacgl"/><path class="kouxvgbln"/><path class="gzzcnbppf"/></g></g>`,
		"fallback": "cryptocurrency:eth",
	});
}

export default Component;
