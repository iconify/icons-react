import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v-ri72wdu.css';
import '../../css/i/iuensy71g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v-ri72wdu"/><path class="iuensy71g"/></g>`,
		"fallback": "solar:alarm-remove-bold",
	});
}

export default Component;
