import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg1-4zbux.css';
import '../../css/f/fdh0m_b1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="lg1-4zbux"/><path class="fdh0m_b1f"/>`,
		"fallback": "selfhst:hermesseg",
	});
}

export default Component;
