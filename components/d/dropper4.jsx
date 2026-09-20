import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exi9k5bqt.css';
import '../../css/u/upokvvtxt.css';
import '../../css/r/rvcxalj0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exi9k5bqt"/><path clip-rule="evenodd" class="upokvvtxt"/><path clip-rule="evenodd" class="rvcxalj0m"/></g>`,
		"fallback": "reicon:dropper4",
	});
}

export default Component;
