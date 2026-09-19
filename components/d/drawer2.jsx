import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnhtjtfld.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnhtjtfld"/>`,
		"fallback": "icomoon-free:drawer2",
	});
}

export default Component;
