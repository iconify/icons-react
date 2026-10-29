import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hh72aib6v.css';
import '../../css/h/hkqdwxbdb.css';
import '../../css/o/oshi5ze9z.css';
import '../../css/o/ozywhg4qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hh72aib6v wm-k"/><path class="hkqdwxbdb wm-a"/><path class="oshi5ze9z wm-k"/><path class="ozywhg4qo wm-a"/></g>`,
		"fallback": "withicons:arrow-up-left-sketch",
	});
}

export default Component;
