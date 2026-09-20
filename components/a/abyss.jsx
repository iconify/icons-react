import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh5k_h5sj.css';
import '../../css/f/fw7m_cc5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh5k_h5sj"/><path class="fw7m_cc5t"/>`,
		"fallback": "token:abyss",
	});
}

export default Component;
