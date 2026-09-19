import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gk0tsfbjh.css';
import '../../css/g/gc03tobel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gk0tsfbjh"/><path class="gc03tobel"/></g>`,
		"fallback": "bitcoin-icons:exit-filled",
	});
}

export default Component;
