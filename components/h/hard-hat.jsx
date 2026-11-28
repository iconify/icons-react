import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aotw6rd9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aotw6rd9y"/>`,
		"fallback": "noviair:hard-hat",
	});
}

export default Component;
