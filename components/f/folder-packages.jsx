import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5fxn4-5j.css';
import '../../css/m/mf65xvbvw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5fxn4-5j"/><path class="mf65xvbvw"/>`,
		"fallback": "material-icon-theme:folder-packages",
	});
}

export default Component;
