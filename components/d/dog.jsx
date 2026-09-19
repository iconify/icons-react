import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wes1wgtwv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wes1wgtwv"/>`,
		"fallback": "at-icons:dog",
	});
}

export default Component;
