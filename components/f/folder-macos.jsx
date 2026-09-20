import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dypv3-mdc.css';
import '../../css/i/i2crm77yo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dypv3-mdc"/><path class="i2crm77yo"/>`,
		"fallback": "material-icon-theme:folder-macos",
	});
}

export default Component;
