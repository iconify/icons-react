import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hksam20rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hksam20rd"/>`,
		"fallback": "iconoir:info-circle-solid",
	});
}

export default Component;
