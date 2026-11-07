import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za9uchb8f.css';
import '../../css/j/j2-x-cbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za9uchb8f"/><path class="j2-x-cbeh"/>`,
		"fallback": "solar:columns-2-bold-duotone",
	});
}

export default Component;
