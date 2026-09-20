import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l47nr7bbh.css';
import '../../css/x/xyz89xbcv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l47nr7bbh"/><path class="xyz89xbcv"/>`,
		"fallback": "material-icon-theme:folder-netlify",
	});
}

export default Component;
