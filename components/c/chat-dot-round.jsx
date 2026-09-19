import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp2ifdcbr.css';
import '../../css/b/b2kor1dzx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp2ifdcbr"/><path class="b2kor1dzx"/>`,
		"fallback": "ep:chat-dot-round",
	});
}

export default Component;
