import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkcbc4m_r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkcbc4m_r"/>`,
		"fallback": "material-icon-theme:drawio",
	});
}

export default Component;
