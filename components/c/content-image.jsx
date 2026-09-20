import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibmsagb0k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibmsagb0k"/>`,
		"fallback": "streamline-block:content-image",
	});
}

export default Component;
