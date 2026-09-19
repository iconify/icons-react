import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jif-fcboa.css';
import '../../css/n/n30r1sbok.css';
import '../../css/j/j5nytdpoh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jif-fcboa"/><path class="n30r1sbok"/><path class="j5nytdpoh"/></g>`,
		"fallback": "icon-park-outline:file-jpg",
	});
}

export default Component;
