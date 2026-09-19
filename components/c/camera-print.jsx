import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gpnm6aciu.css';
import '../../css/m/mo9yrp11u.css';
import '../../css/v/vcqmbfvcz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gpnm6aciu"/><path class="mo9yrp11u"/><path class="vcqmbfvcz"/></g>`,
		"fallback": "pepicons:camera-print",
	});
}

export default Component;
