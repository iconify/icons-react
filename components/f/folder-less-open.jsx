import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xolmzhbns.css';
import '../../css/m/m_0djgu3d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xolmzhbns"/><path class="m_0djgu3d"/>`,
		"fallback": "material-icon-theme:folder-less-open",
	});
}

export default Component;
