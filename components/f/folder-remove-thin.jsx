import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecisew_dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecisew_dh"/>`,
		"fallback": "iconamoon:folder-remove-thin",
	});
}

export default Component;
