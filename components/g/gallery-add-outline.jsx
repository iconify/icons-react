import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s67oz8y4y.css';
import '../../css/m/m_i_8r9um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s67oz8y4y"/><path class="m_i_8r9um"/></g>`,
		"fallback": "solar:gallery-add-outline",
	});
}

export default Component;
