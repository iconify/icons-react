import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuxb7lb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nuxb7lb7f"/>`,
		"fallback": "heroicons:battery-100-solid",
	});
}

export default Component;
