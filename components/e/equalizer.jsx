import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz6id2bed.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz6id2bed"/>`,
		"fallback": "icomoon-free:equalizer",
	});
}

export default Component;
