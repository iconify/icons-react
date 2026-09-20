import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6car2lzv.css';
import '../../css/g/gdo59-lfo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p6car2lzv"/><path class="gdo59-lfo"/></g>`,
		"fallback": "streamline-plump-color:contact-phonebook-flat",
	});
}

export default Component;
