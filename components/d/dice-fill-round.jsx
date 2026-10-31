import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yul3m_bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yul3m_bzg"/>`,
		"fallback": "coolicons:dice-fill-round",
	});
}

export default Component;
