import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpcp248iu.css';
import '../../css/f/frl5hnbgv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpcp248iu"/><path class="frl5hnbgv"/>`,
		"fallback": "icomoon-free:coin-euro",
	});
}

export default Component;
