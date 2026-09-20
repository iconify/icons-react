import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0064doyk.css';
import '../../css/m/m8qdx0f9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0064doyk"/><path class="m8qdx0f9p"/>`,
		"fallback": "selfhst:buggregator-light",
	});
}

export default Component;
