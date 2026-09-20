import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbn1m_afc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbn1m_afc"/>`,
		"fallback": "mingcute:arrows-up-line",
	});
}

export default Component;
