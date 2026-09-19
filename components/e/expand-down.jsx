import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hvve69bkn.css';
import '../../css/l/l88i7dblt.css';
import '../../css/t/tzpiabczw.css';
import '../../css/t/tw29b1vdl.css';
import '../../css/o/o594j2bhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="hvve69bkn"/><path class="l88i7dblt"/><path class="tzpiabczw"/><path class="tw29b1vdl"/><path class="o594j2bhc"/></g>`,
		"fallback": "icon-park:expand-down",
	});
}

export default Component;
