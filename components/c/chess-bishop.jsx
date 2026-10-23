import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vm5eqsbdj.css';
import '../../css/g/gssv_m_oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vm5eqsbdj"/><path class="gssv_m_oo"/></g>`,
		"fallback": "vadivam:chess-bishop",
	});
}

export default Component;
