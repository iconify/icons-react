import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dur0b2p3t.css';
import '../../css/i/imnbdmb7j.css';
import '../../css/p/pn6-uy73m.css';
import '../../css/s/smq-tk8nf.css';
import '../../css/f/fan_kmbuu.css';
import '../../css/k/kvfo0lb0a.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dur0b2p3t"/><path class="imnbdmb7j"/><path class="pn6-uy73m"/><g class="smq-tk8nf"><path class="fan_kmbuu"/><path class="kvfo0lb0a"/></g><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-brunei",
	});
}

export default Component;
