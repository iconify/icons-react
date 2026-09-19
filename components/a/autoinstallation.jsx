import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lell8f7di.css';
import '../../css/t/tvlrzedqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lell8f7di"/><path class="tvlrzedqe"/>`,
		"fallback": "eos-icons:autoinstallation",
	});
}

export default Component;
