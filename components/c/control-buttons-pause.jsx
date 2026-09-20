import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh56m7awr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh56m7awr"/>`,
		"fallback": "streamline-block:control-buttons-pause",
	});
}

export default Component;
