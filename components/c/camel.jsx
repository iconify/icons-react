import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loguhqc5x.css';
import '../../css/t/tkeopq5ji.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x0a-wbt1d.css';
import '../../css/h/hw3qa1c3u.css';
import '../../css/x/xt1rh7dbh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loguhqc5x"/><path class="tkeopq5ji"/><g class="jn8qy4bru"><path class="x0a-wbt1d"/><path class="hw3qa1c3u"/><path class="xt1rh7dbh"/></g>`,
		"fallback": "openmoji:camel",
	});
}

export default Component;
