import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-om4ryqg.css';
import '../../css/i/iaawigbgs.css';
import '../../css/m/mhx474baz.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/eya-96bsc.css';
import '../../css/h/hd1i72iis.css';
import '../../css/l/lfbgbrb9a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-om4ryqg"/><path class="iaawigbgs"/><path class="mhx474baz"/><g class="jn8qy4bru"><path class="eya-96bsc"/><path class="hd1i72iis"/><path class="lfbgbrb9a"/></g>`,
		"fallback": "openmoji:exit",
	});
}

export default Component;
