import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp_zsmb1r.css';
import '../../css/h/hoky06fxe.css';
import '../../css/g/gxeqjdbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp_zsmb1r"/><circle class="hoky06fxe"/><path class="gxeqjdbdi"/>`,
		"fallback": "eos-icons:admin-outlined",
	});
}

export default Component;
