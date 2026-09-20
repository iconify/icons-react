import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t6m_8jbzi.css';
import '../../css/a/afcm6_ieq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t6m_8jbzi"/><path class="afcm6_ieq"/></g>`,
		"fallback": "reicon:cryptography-filled",
	});
}

export default Component;
