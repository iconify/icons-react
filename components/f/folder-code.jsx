import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meqk0cb2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="meqk0cb2y"/>`,
		"fallback": "gravity-ui:folder-code",
	});
}

export default Component;
