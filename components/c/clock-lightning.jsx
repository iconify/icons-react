import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7zs-8p3m.css';
import '../../css/c/ch45weh1g.css';
import '../../css/v/vuuh2kbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a7zs-8p3m"/><path class="ch45weh1g"/><path class="vuuh2kbfc"/></g>`,
		"fallback": "andrsrxn:clock-lightning",
	});
}

export default Component;
