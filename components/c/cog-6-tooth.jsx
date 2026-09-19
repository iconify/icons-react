import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwzc_4j9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xwzc_4j9t"/>`,
		"fallback": "heroicons-solid:cog-6-tooth",
	});
}

export default Component;
