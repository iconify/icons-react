import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zn5lpdr9u.css';
import '../../css/s/si4-fhbse.css';
import '../../css/y/yl7p83b-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="zn5lpdr9u"/><path class="si4-fhbse"/><path class="yl7p83b-u"/></g>`,
		"fallback": "streamline-plump-color:feather-pen",
	});
}

export default Component;
