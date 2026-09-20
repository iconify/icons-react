import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx9qcfbri.css';
import '../../css/e/ewlo7db9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx9qcfbri"/><path class="ewlo7db9s"/>`,
		"fallback": "material-icon-theme:folder-pdm",
	});
}

export default Component;
