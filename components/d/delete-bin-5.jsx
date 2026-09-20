import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mb1g0p5ka.css';
import '../../css/h/h4e_5spqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mb1g0p5ka"/><path class="h4e_5spqw"/></g>`,
		"fallback": "streamline-freehand:delete-bin-5",
	});
}

export default Component;
