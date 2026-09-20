import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/y/yan8t0ban.css';
import '../../css/e/eapj0l7sp.css';
import '../../css/f/frlrrxaqn.css';
import '../../css/h/howwg-b9w.css';
import '../../css/p/pfr_qr32m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="yan8t0ban"/><path class="eapj0l7sp"/></g><path class="frlrrxaqn"/><path class="howwg-b9w"/><path class="pfr_qr32m"/>`,
		"fallback": "openmoji:chequered-flag",
	});
}

export default Component;
