import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbf384hqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbf384hqh"/>`,
		"fallback": "thesvg-color:byju-s",
	});
}

export default Component;
