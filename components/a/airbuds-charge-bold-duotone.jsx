import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/l0lxso0pj.css';
import '../../css/s/sfdtz-b-u.css';
import '../../css/o/ozclf-b-m.css';
import '../../css/k/k50tiocwd.css';
import '../../css/t/tn3cnxbms.css';
import '../../css/i/i56kufhep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="l0lxso0pj"/><path class="sfdtz-b-u"/></g><path class="ozclf-b-m"/><path class="k50tiocwd"/><path clip-rule="evenodd" class="tn3cnxbms"/><path class="i56kufhep"/>`,
		"fallback": "solar:airbuds-charge-bold-duotone",
	});
}

export default Component;
