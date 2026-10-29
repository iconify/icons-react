import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tj134_beb.css';
import '../../css/e/ebt74uolj.css';
import '../../css/g/g6lfx9bco.css';
import '../../css/c/cpu9b4b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tj134_beb"/><path class="ebt74uolj wm-a"/><path class="g6lfx9bco wm-k"/><path class="cpu9b4b-s wm-a"/></g>`,
		"fallback": "withicons:badge-percent-sketch",
	});
}

export default Component;
