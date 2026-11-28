import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwb5omtzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwb5omtzc"/>`,
		"fallback": "noviair-light:globe-search",
	});
}

export default Component;
