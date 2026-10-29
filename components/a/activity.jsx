import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2ds1lbwe.css';
import '../../css/p/pqhca394o.css';
import '../../css/y/y9052qmiw.css';
import '../../css/m/m2qc0esdi.css';
import '../../css/t/t_oah-bdy.css';
import '../../css/h/hnb6f2b3q.css';
import '../../css/q/qbmj9sseh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2ds1lbwe wm-shadow"/><path class="pqhca394o"/><path class="y9052qmiw"/><path class="m2qc0esdi"/><path class="t_oah-bdy"/><path class="hnb6f2b3q wm-shine"/><path class="qbmj9sseh"/>`,
		"fallback": "withicons-plush:activity",
	});
}

export default Component;
