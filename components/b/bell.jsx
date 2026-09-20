import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7hozdbfo.css';
import '../../css/w/wsf1vzb3i.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/x/xxjjkdbfs.css';
import '../../css/j/jd1jh3bez.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r7hozdbfo"/><path class="wsf1vzb3i"/><g class="rpvb-o6bq"><path class="xxjjkdbfs"/><path class="jd1jh3bez"/></g>`,
		"fallback": "openmoji:bell",
	});
}

export default Component;
