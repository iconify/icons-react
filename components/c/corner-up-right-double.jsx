import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uy0-1xffp.css';
import '../../css/w/wou7f075w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uy0-1xffp"/><path class="wou7f075w"/></g>`,
		"fallback": "tabler:corner-up-right-double",
	});
}

export default Component;
