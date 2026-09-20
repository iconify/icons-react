import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/smejqvbtu.css';
import '../../css/n/n03m_-m0p.css';
import '../../css/l/llhkxtbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="smejqvbtu"/><path class="n03m_-m0p"/><path class="llhkxtbuv"/></g>`,
		"fallback": "streamline-ultimate:hospital-building-pin",
	});
}

export default Component;
