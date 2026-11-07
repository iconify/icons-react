import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebyxg8bpj.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rt40puy8t.css';
import '../../css/m/m8ow94bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ebyxg8bpj"/><g class="xtpeb-edw"><path class="rt40puy8t"/><path class="m8ow94bvr"/></g>`,
		"fallback": "solar:city-bold-duotone",
	});
}

export default Component;
