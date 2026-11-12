import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8m_n_89x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8m_n_89x"/>`,
		"fallback": "selfhst:chatgpt-dark",
	});
}

export default Component;
