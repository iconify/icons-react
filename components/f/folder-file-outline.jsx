import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejexi5b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejexi5b2o"/>`,
		"fallback": "mdi:folder-file-outline",
	});
}

export default Component;
