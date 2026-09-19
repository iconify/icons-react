import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fma0zqbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fma0zqbvm"/>`,
		"fallback": "akar-icons:bug",
	});
}

export default Component;
