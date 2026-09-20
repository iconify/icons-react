import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a54w-8bnq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a54w-8bnq"/>`,
		"fallback": "streamline:android-solid",
	});
}

export default Component;
