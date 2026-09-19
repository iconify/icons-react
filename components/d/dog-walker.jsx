import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b63ho8b4l.css';
import '../../css/v/vqcm1iv2p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b63ho8b4l"/><path class="vqcm1iv2p"/>`,
		"fallback": "carbon:dog-walker",
	});
}

export default Component;
