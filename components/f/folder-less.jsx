import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcjmcxbsc.css';
import '../../css/m/m_0djgu3d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcjmcxbsc"/><path class="m_0djgu3d"/>`,
		"fallback": "material-icon-theme:folder-less",
	});
}

export default Component;
