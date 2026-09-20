import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlb-sobmx.css';
import '../../css/f/fv0846l_k.css';
import '../../css/m/m_fk-ibei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlb-sobmx"/><path class="fv0846l_k"/><path class="m_fk-ibei"/>`,
		"fallback": "token:cel",
	});
}

export default Component;
