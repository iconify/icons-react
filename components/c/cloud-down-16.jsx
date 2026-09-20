import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnnwbubkj.css';
import '../../css/g/g77ln7-3a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnnwbubkj"/><path class="g77ln7-3a"/>`,
		"fallback": "qlementine-icons:cloud-down-16",
	});
}

export default Component;
