import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgyvohp4q.css';
import '../../css/z/zua3n3brj.css';
import '../../css/k/kb9ry10cf.css';
import '../../css/a/aqfad6b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dgyvohp4q"/><path class="zua3n3brj"/><path class="kb9ry10cf"/><path class="aqfad6b-w"/></g>`,
		"fallback": "andrsrxn:game-controller-x",
	});
}

export default Component;
