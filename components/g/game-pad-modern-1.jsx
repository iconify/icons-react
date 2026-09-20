import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z96yl-b9i.css';
import '../../css/a/ad7wyubda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z96yl-b9i"/><path clip-rule="evenodd" class="ad7wyubda"/>`,
		"fallback": "lineicons:game-pad-modern-1",
	});
}

export default Component;
