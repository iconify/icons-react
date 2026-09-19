import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epec9q7br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epec9q7br"/>`,
		"fallback": "gg:compress-v",
	});
}

export default Component;
