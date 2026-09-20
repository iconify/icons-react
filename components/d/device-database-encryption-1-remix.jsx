import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjq-1sd1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fjq-1sd1r"/>`,
		"fallback": "streamline-plump:device-database-encryption-1-remix",
	});
}

export default Component;
