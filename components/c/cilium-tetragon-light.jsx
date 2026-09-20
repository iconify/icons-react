import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_n7pbc6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_n7pbc6v"/>`,
		"fallback": "selfhst:cilium-tetragon-light",
	});
}

export default Component;
