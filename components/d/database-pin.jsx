import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1u9eup1x.css';
import '../../css/l/l67ue-16l.css';
import '../../css/t/t3psc9i0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j1u9eup1x"/><path class="l67ue-16l"/><path class="t3psc9i0s"/></g>`,
		"fallback": "tabler:database-pin",
	});
}

export default Component;
