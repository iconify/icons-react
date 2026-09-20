import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x99gtacbb.css';
import '../../css/b/b21nhrbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="x99gtacbb"/><path class="b21nhrbwj"/></g>`,
		"fallback": "lucide:instagram",
	});
}

export default Component;
