import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kso_zevhi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kso_zevhi"/>`,
		"fallback": "heroicons:cloud-16-solid",
	});
}

export default Component;
