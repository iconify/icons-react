import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odcedq8ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odcedq8ep"/>`,
		"fallback": "tabler:currency-dollar-canadian",
	});
}

export default Component;
