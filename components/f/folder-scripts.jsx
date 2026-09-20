import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dypv3-mdc.css';
import '../../css/q/qg_93a6ly.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dypv3-mdc"/><path class="qg_93a6ly"/>`,
		"fallback": "material-icon-theme:folder-scripts",
	});
}

export default Component;
