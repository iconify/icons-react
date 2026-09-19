import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec1-kobqx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec1-kobqx"/>`,
		"fallback": "bi:eject-fill",
	});
}

export default Component;
