import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a025csbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path xmlns="http://www.w3.org/2000/svg" class="a025csbqg"/>`,
		"fallback": "grommet-icons:genai",
	});
}

export default Component;
