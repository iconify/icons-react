import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bg8urccdb.css';
import '../../css/k/kcxl2ijeo.css';
import '../../css/b/b-0idgfsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bg8urccdb"/><path class="kcxl2ijeo"/><path class="b-0idgfsf"/></g>`,
		"fallback": "streamline-plump-color:ascending-alphabetical-order",
	});
}

export default Component;
