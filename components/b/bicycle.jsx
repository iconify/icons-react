import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uivdmipwn.css';
import '../../css/n/n_b355bkp.css';
import '../../css/b/bsk_i7r2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="uivdmipwn"/><circle class="n_b355bkp"/><path class="bsk_i7r2s"/></g>`,
		"fallback": "akar-icons:bicycle",
	});
}

export default Component;
