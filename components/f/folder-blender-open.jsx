import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpyz49q5o.css';
import '../../css/h/hyjsfrrwi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpyz49q5o"/><path class="hyjsfrrwi"/>`,
		"fallback": "material-icon-theme:folder-blender-open",
	});
}

export default Component;
