import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owmm25bsk.css';
import '../../css/v/v8sc8rzsp.css';
import '../../css/m/meey0ablw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owmm25bsk"/><path class="v8sc8rzsp"/><path class="meey0ablw"/>`,
		"fallback": "openmoji:cursor",
	});
}

export default Component;
