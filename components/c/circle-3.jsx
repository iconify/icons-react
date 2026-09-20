import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auhlrw2_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auhlrw2_x"/>`,
		"fallback": "roentgen:circle-3",
	});
}

export default Component;
