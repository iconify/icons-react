import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6y4p5qgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b6y4p5qgt"/>`,
		"fallback": "heroicons:chevron-up-solid",
	});
}

export default Component;
