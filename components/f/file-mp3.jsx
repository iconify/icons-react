import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8byvuc8v.css';
import '../../css/n/nwuwst0yc.css';
import '../../css/v/vv5q_krbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m8byvuc8v"/><path class="nwuwst0yc"/><path class="vv5q_krbt"/></g>`,
		"fallback": "andrsrxn:file-mp3",
	});
}

export default Component;
