import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjnepbckk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjnepbckk"/>`,
		"fallback": "at-icons:grid-fine",
	});
}

export default Component;
