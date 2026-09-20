import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4fu23kqa.css';
import '../../css/p/p--gbnsrn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4fu23kqa"/><path class="p--gbnsrn"/>`,
		"fallback": "streamline-pixel:beauty-mirror-2",
	});
}

export default Component;
