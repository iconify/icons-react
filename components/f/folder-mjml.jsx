import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9jj03bpd.css';
import '../../css/m/m3bl0tblc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9jj03bpd"/><path class="m3bl0tblc"/>`,
		"fallback": "material-icon-theme:folder-mjml",
	});
}

export default Component;
