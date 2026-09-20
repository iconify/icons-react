import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2wb4r8nh.css';
import '../../css/k/ki2dhzb_s.css';
import '../../css/e/erawww1db.css';
import '../../css/t/t4luh_rqv.css';
import '../../css/p/pdbcndb0e.css';
import '../../css/x/x-63fr23v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2wb4r8nh"/><path class="ki2dhzb_s"/><path class="erawww1db"/><path class="t4luh_rqv"/><path class="pdbcndb0e"/><path class="x-63fr23v"/>`,
		"fallback": "openmoji:ballot-box-with-ballot",
	});
}

export default Component;
