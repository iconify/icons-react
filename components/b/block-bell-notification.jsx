import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyhwt_bva.css';
import '../../css/s/si8rmjbtl.css';
import '../../css/x/x527ocb4j.css';
import '../../css/o/o5b9qje-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gyhwt_bva"/><path class="si8rmjbtl"/><path class="x527ocb4j"/><path class="o5b9qje-s"/></g>`,
		"fallback": "streamline-color:block-bell-notification",
	});
}

export default Component;
