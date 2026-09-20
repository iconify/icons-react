import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnop98bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnop98bbl"/>`,
		"fallback": "streamline-sharp:device-database-encryption-1",
	});
}

export default Component;
