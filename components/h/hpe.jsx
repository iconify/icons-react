import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4bmm9bng.css';

const viewBox = {"width":48,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a4bmm9bng"/>`,
		"fallback": "grommet-icons:hpe",
	});
}

export default Component;
