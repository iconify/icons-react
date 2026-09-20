import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tucni0vfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tucni0vfc"/>`,
		"fallback": "streamline-plump:box-waterproof-remix",
	});
}

export default Component;
