import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g52m_vhun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g52m_vhun"/>`,
		"fallback": "healthicons:clinical-f-24px",
	});
}

export default Component;
