import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pathnjiyv.css';
import '../../css/e/ec_xsy4gs.css';
import '../../css/i/iugk-7bxf.css';
import '../../css/a/a0zl88bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pathnjiyv"/><circle class="ec_xsy4gs"/><path class="iugk-7bxf"/><circle class="a0zl88bqz"/></g>`,
		"fallback": "lucide:bus",
	});
}

export default Component;
