import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy65xx2-p.css';

const viewBox = {"width":1792,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy65xx2-p"/>`,
		"fallback": "fa:css3",
	});
}

export default Component;
