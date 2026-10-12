import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ann_yxbrh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ann_yxbrh"/>`,
		"fallback": "garden:box-expand-fill-20",
	});
}

export default Component;
