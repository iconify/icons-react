import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/a/au2uu7bci.css';
import '../../css/f/f5iszbo2p.css';
import '../../css/x/x87nhskhc.css';
import '../../css/f/fqs6crpxy.css';
import '../../css/l/lgby9x31m.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="au2uu7bci"/><circle class="f5iszbo2p"/><path class="x87nhskhc"/><path class="fqs6crpxy"/><path class="lgby9x31m"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-christmas-island",
	});
}

export default Component;
