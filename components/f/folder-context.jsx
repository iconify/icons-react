import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_8dvglkn.css';
import '../../css/m/ms_cpibuw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_8dvglkn"/><path class="ms_cpibuw"/>`,
		"fallback": "material-icon-theme:folder-context",
	});
}

export default Component;
