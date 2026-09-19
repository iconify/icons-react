import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yuyn37ibu.css';
import '../../css/m/m9nrudbxy.css';
import '../../css/n/nb4dhac9j.css';
import '../../css/n/nnz24290l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="yuyn37ibu"/><circle class="m9nrudbxy"/><path class="nb4dhac9j"/><path class="nnz24290l"/></g>`,
		"fallback": "hugeicons:delivered-sent",
	});
}

export default Component;
