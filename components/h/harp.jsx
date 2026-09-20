import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nif4azczd.css';
import '../../css/f/fdhrqg8rs.css';
import '../../css/z/zm5j3jtcy.css';
import '../../css/d/d3ya78b3j.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x_t1mvbvs.css';
import '../../css/q/q23kucb9c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nif4azczd"><path class="fdhrqg8rs"/><path class="zm5j3jtcy"/><path class="d3ya78b3j"/></g><g class="jn8qy4bru"><path class="x_t1mvbvs"/><path class="q23kucb9c"/></g>`,
		"fallback": "openmoji:harp",
	});
}

export default Component;
