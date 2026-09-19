import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjn-iubyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjn-iubyv"/>`,
		"fallback": "game-icons:fez",
	});
}

export default Component;
