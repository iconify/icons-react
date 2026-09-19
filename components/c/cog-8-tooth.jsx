import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjmase5-m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bjmase5-m"/>`,
		"fallback": "heroicons-solid:cog-8-tooth",
	});
}

export default Component;
