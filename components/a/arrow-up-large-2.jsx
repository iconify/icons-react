import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmz8e061p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmz8e061p"/>`,
		"fallback": "streamline-sharp:arrow-up-large-2",
	});
}

export default Component;
