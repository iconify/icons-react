import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yxz1-5b4p.css';
import '../../css/x/x7xjjq43t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yxz1-5b4p"/><path class="x7xjjq43t"/></g>`,
		"fallback": "lucide:folders",
	});
}

export default Component;
