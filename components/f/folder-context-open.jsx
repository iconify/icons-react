import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urkx-c35c.css';
import '../../css/m/ms_cpibuw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urkx-c35c"/><path class="ms_cpibuw"/>`,
		"fallback": "material-icon-theme:folder-context-open",
	});
}

export default Component;
