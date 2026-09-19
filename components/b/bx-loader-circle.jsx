import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3_7dmu3k.css';
import '../../css/y/yfz3w9lrl.css';
import '../../css/a/aec8oobvu.css';
import '../../css/o/oeljw3b-k.css';
import '../../css/q/qu5cj7ysa.css';
import '../../css/c/cpa8pz1nt.css';
import '../../css/m/mr_yc46xm.css';
import '../../css/p/phrdbcblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n3_7dmu3k"/><circle class="yfz3w9lrl"/><circle class="aec8oobvu"/><circle class="oeljw3b-k"/><circle class="qu5cj7ysa"/><circle class="cpa8pz1nt"/><circle class="mr_yc46xm"/><circle class="phrdbcblc"/>`,
		"fallback": "bx:bx-loader-circle",
	});
}

export default Component;
