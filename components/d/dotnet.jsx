import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afa8v5bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afa8v5bor"/>`,
		"fallback": "simple-icons:dotnet",
	});
}

export default Component;
