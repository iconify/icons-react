import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv3xpcbji.css';
import '../../css/u/ubqlaiu9a.css';
import '../../css/k/k6kp56six.css';
import '../../css/w/w0_zt21vg.css';
import '../../css/p/ph75h2blu.css';
import '../../css/x/xegca7biw.css';
import '../../css/t/tu_bvbbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv3xpcbji wm-shadow"/><path class="ubqlaiu9a wm-k"/><path class="k6kp56six wm-k"/><path class="w0_zt21vg wm-a"/><path class="ph75h2blu wm-k"/><path class="wm-a xegca7biw"/><path class="tu_bvbbkp wm-a"/>`,
		"fallback": "withicons-pastel:bike",
	});
}

export default Component;
