import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jes28n7aj.css';
import '../../css/r/rjlyehbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jes28n7aj"/><path class="rjlyehbsn"/></g>`,
		"fallback": "hugeicons:file-pen",
	});
}

export default Component;
