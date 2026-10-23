import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kd2ouzbpq.css';
import '../../css/b/bitosrbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kd2ouzbpq"/><path class="bitosrbdn"/></g>`,
		"fallback": "vadivam:certificate",
	});
}

export default Component;
