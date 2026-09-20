import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-9dobn6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-9dobn6a"/>`,
		"fallback": "nrk:bookmark-solid",
	});
}

export default Component;
