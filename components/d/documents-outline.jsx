import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b48_ecc_g.css';
import '../../css/x/x01waj_-c.css';
import '../../css/b/ba80-obkp.css';
import '../../css/z/zgr1wqj3d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b48_ecc_g"/><path class="x01waj_-c"/><path class="ba80-obkp"/><path class="zgr1wqj3d"/>`,
		"fallback": "famicons:documents-outline",
	});
}

export default Component;
