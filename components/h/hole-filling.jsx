import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt8jb-7jt.css';
import '../../css/v/v3_7cbqjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yt8jb-7jt"/><path class="v3_7cbqjt"/>`,
		"fallback": "carbon:hole-filling",
	});
}

export default Component;
