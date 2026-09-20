import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv9bc4j-a.css';
import '../../css/z/zmmw0rbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kv9bc4j-a"/><path class="zmmw0rbgk"/>`,
		"fallback": "token:boa",
	});
}

export default Component;
