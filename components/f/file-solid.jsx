import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjiv2pbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjiv2pbxx"/>`,
		"fallback": "withicons:file-solid",
	});
}

export default Component;
