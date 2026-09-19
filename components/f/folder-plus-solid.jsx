import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf3at3bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rf3at3bvu"/>`,
		"fallback": "basil:folder-plus-solid",
	});
}

export default Component;
