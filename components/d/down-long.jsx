import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5l6xgz1d.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5l6xgz1d"/>`,
		"fallback": "fa6-solid:down-long",
	});
}

export default Component;
