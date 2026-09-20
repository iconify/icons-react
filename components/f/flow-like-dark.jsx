import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1m_q4b0x.css';
import '../../css/o/os7nlqblq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1m_q4b0x"/><path class="os7nlqblq"/>`,
		"fallback": "selfhst:flow-like-dark",
	});
}

export default Component;
