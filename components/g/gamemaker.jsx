import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afa8214vu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afa8214vu"/>`,
		"fallback": "material-icon-theme:gamemaker",
	});
}

export default Component;
