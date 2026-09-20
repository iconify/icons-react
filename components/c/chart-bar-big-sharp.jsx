import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eukozqx7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eukozqx7k"/>`,
		"fallback": "pixelarticons:chart-bar-big-sharp",
	});
}

export default Component;
