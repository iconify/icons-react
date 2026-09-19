import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3_unr4bd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3_unr4bd"/>`,
		"fallback": "icomoon-free:feed",
	});
}

export default Component;
