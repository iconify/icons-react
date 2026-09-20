import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjl42vbss.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kjl42vbss"/>`,
		"fallback": "streamline-plump:braille-blind-solid",
	});
}

export default Component;
