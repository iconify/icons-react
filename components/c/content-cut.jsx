import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6zh5ebzg.css';
import '../../css/c/ctmkibhti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x6zh5ebzg"/><path class="ctmkibhti"/>`,
		"fallback": "streamline-block:content-cut",
	});
}

export default Component;
