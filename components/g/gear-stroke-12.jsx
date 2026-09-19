import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eii-1ollo.css';
import '../../css/a/ahciwmy7z.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eii-1ollo"/><circle class="ahciwmy7z"/>`,
		"fallback": "garden:gear-stroke-12",
	});
}

export default Component;
