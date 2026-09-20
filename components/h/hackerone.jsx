import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sljaq7bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sljaq7bdw"/>`,
		"fallback": "simple-icons:hackerone",
	});
}

export default Component;
