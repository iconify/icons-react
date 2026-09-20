import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muy2xg7rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muy2xg7rx"/>`,
		"fallback": "streamline-sharp:database-server-2",
	});
}

export default Component;
