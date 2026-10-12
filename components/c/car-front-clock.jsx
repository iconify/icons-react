import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4n02mblg.css';
import '../../css/t/toi2hkzzj.css';
import '../../css/a/aa73izajr.css';
import '../../css/z/ztax_ycjr.css';
import '../../css/b/bzrkcvbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v4n02mblg"/><path class="toi2hkzzj"/><path class="aa73izajr"/><circle class="ztax_ycjr"/><path class="bzrkcvbeh"/></g>`,
		"fallback": "andrsrxn:car-front-clock",
	});
}

export default Component;
