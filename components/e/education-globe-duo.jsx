import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/a/apmp40b6o.css';
import '../../css/h/hnnhofbct.css';
import '../../css/s/serc4t1iq.css';
import '../../css/q/qs-vlocmu.css';
import '../../css/i/inxwgmbln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="apmp40b6o"/><path class="hnnhofbct"/><path class="serc4t1iq"/><path class="qs-vlocmu"/><path class="inxwgmbln"/></g>`,
		"fallback": "streamline-kameleon-color:education-globe-duo",
	});
}

export default Component;
