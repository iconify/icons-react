import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vi04vkb8g.css';
import '../../css/w/wbsu-9b5l.css';
import '../../css/y/yiecks5xj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="vi04vkb8g"/><path class="wbsu-9b5l"/><path class="yiecks5xj"/></g>`,
		"fallback": "streamline-plump-color:dna",
	});
}

export default Component;
