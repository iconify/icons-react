import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/g/ge_xo12qt.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/r/rnqgk3brp.css';
import '../../css/j/jy_2_5cxh.css';
import '../../css/e/eptcm0b9a.css';
import '../../css/k/kjnbt2b_r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="ge_xo12qt"/><g class="x8poo_bjf"><path class="rnqgk3brp"/><path class="jy_2_5cxh"/><path class="eptcm0b9a"/><path class="kjnbt2b_r"/></g>`,
		"fallback": "openmoji:face-savoring-food",
	});
}

export default Component;
