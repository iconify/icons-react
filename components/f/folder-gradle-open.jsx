import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge-jeq6zd.css';
import '../../css/m/mexy6lbof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge-jeq6zd"/><path class="mexy6lbof"/>`,
		"fallback": "material-icon-theme:folder-gradle-open",
	});
}

export default Component;
