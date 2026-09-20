import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/al6fp8bvh.css';
import '../../css/y/yl0waibaz.css';
import '../../css/h/hldpyqb4c.css';
import '../../css/b/biyzyno2u.css';
import '../../css/g/g3fu8gbay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="al6fp8bvh"/><path class="yl0waibaz"/><path class="hldpyqb4c"/><path class="biyzyno2u"/><path class="g3fu8gbay"/></g>`,
		"fallback": "streamline-plump-color:code-monitor-2",
	});
}

export default Component;
