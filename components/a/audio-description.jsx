import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba9o2nfex.css';
import '../../css/g/gjjyqdbbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba9o2nfex"/><path class="gjjyqdbbd"/>`,
		"fallback": "cil:audio-description",
	});
}

export default Component;
