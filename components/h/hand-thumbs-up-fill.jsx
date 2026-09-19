import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkk31pxxs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkk31pxxs"/>`,
		"fallback": "bi:hand-thumbs-up-fill",
	});
}

export default Component;
