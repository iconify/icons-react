import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up97d7kqc.css';
import '../../css/o/or2m_gb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up97d7kqc"/><path class="or2m_gb2c"/>`,
		"fallback": "mage:amazon",
	});
}

export default Component;
