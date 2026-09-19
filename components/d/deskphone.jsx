import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eocwi36re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eocwi36re"/>`,
		"fallback": "griddy-icons:deskphone",
	});
}

export default Component;
