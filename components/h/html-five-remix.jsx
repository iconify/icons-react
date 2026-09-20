import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du2qh3bmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="du2qh3bmp"/>`,
		"fallback": "streamline-plump:html-five-remix",
	});
}

export default Component;
