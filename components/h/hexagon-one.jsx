import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_felubtj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_felubtj"/>`,
		"fallback": "icon-park-solid:hexagon-one",
	});
}

export default Component;
