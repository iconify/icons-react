import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_-n5y9kx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_-n5y9kx"/>`,
		"fallback": "icomoon-free:display",
	});
}

export default Component;
