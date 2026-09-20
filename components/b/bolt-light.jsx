import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdj-7nb0w.css';
import '../../css/t/tbhf0lycc.css';
import '../../css/w/wei4ynt1z.css';

const viewBox = {"width":160,"height":68.7,"top":45.65};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdj-7nb0w"/><path class="tbhf0lycc"/><path class="wei4ynt1z"/>`,
		"fallback": "thesvg-color:bolt-light",
	});
}

export default Component;
