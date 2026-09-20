import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbvmo8dlf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbvmo8dlf"/>`,
		"fallback": "material-icon-theme:doctex-installer",
	});
}

export default Component;
