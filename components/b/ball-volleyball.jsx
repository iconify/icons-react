import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/h/hnrdfx-go.css';
import '../../css/j/joicklbhm.css';
import '../../css/b/bi2b7xbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="hnrdfx-go"/><path class="joicklbhm"/><path class="bi2b7xbca"/></g>`,
		"fallback": "tabler:ball-volleyball",
	});
}

export default Component;
