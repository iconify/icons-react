import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7pbxqb4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7pbxqb4k"/>`,
		"fallback": "roentgen:bicycle-p-small",
	});
}

export default Component;
