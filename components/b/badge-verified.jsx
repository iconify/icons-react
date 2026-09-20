import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k889x9ems.css';
import '../../css/h/h9m_z6b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k889x9ems"/><path class="h9m_z6b3o"/>`,
		"fallback": "stash:badge-verified",
	});
}

export default Component;
