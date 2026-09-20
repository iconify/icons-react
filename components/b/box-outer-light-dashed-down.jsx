import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebppv2s-o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebppv2s-o"/>`,
		"fallback": "memory:box-outer-light-dashed-down",
	});
}

export default Component;
