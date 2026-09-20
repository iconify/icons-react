import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gvrmjrh6v.css';
import '../../css/g/g8xtn2bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gvrmjrh6v"/><path class="g8xtn2bie"/></g>`,
		"fallback": "reicon:cup-star",
	});
}

export default Component;
