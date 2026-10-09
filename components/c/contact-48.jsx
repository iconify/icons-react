import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbxahob9m.css';
import '../../css/d/d7h047u_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbxahob9m"/><path class="d7h047u_p"/>`,
		"fallback": "energy-icons:contact-48",
	});
}

export default Component;
