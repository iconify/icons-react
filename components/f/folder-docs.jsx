import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcjmcxbsc.css';
import '../../css/x/xtenr_bwi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcjmcxbsc"/><path class="xtenr_bwi"/>`,
		"fallback": "material-icon-theme:folder-docs",
	});
}

export default Component;
