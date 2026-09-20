import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrrnwgbhy.css';
import '../../css/o/od1iqpboh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrrnwgbhy"/><path class="od1iqpboh"/>`,
		"fallback": "ooui:image-layout-frame",
	});
}

export default Component;
