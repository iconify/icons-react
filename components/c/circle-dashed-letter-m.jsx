import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn_jkz6ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn_jkz6ov"/>`,
		"fallback": "tabler:circle-dashed-letter-m",
	});
}

export default Component;
