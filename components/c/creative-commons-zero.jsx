import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2qj_dbwn.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2qj_dbwn"/>`,
		"fallback": "fa-brands:creative-commons-zero",
	});
}

export default Component;
