import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au-d75czj.css';
import '../../css/s/ssbjp9b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="au-d75czj"/><circle class="ssbjp9b9f"/>`,
		"fallback": "lets-icons:img-box-duotone",
	});
}

export default Component;
