import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvjion_2e.css';
import '../../css/z/z8uj590sd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvjion_2e"/><path class="z8uj590sd"/>`,
		"fallback": "carbon:face-mask",
	});
}

export default Component;
