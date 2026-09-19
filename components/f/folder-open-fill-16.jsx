import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3j2m0_dp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3j2m0_dp"/>`,
		"fallback": "garden:folder-open-fill-16",
	});
}

export default Component;
