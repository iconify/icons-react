import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk2oa9bac.css';
import '../../css/m/m_i62lbim.css';
import '../../css/b/bhnv2njoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lk2oa9bac"/><circle class="m_i62lbim"/><path class="bhnv2njoo"/>`,
		"fallback": "bx:bx-message-rounded-dots",
	});
}

export default Component;
