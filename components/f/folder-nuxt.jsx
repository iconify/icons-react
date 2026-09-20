import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dypv3-mdc.css';
import '../../css/o/ov4bk74jf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dypv3-mdc"/><path class="ov4bk74jf"/>`,
		"fallback": "material-icon-theme:folder-nuxt",
	});
}

export default Component;
