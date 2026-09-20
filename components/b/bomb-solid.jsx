import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu5-bn8ab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mu5-bn8ab"/>`,
		"fallback": "streamline-plump:bomb-solid",
	});
}

export default Component;
