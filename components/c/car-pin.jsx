import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gk4d9wbzh.css';
import '../../css/x/xjdn14bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gk4d9wbzh"/><path class="xjdn14bqb"/></g>`,
		"fallback": "tabler:car-pin",
	});
}

export default Component;
