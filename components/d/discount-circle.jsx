import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjuap2b5r.css';
import '../../css/e/eozwp4bxx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjuap2b5r"/><path class="eozwp4bxx"/>`,
		"fallback": "nimbus:discount-circle",
	});
}

export default Component;
