import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix3d72cff.css';
import '../../css/o/ogtj31bng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix3d72cff"/><path class="ogtj31bng"/>`,
		"fallback": "material-icon-theme:folder-kotlin-open",
	});
}

export default Component;
