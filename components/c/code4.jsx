import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzvuledvc.css';
import '../../css/f/f-mdbm9ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rzvuledvc"/><path class="f-mdbm9ye"/></g>`,
		"fallback": "reicon:code4",
	});
}

export default Component;
