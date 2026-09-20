import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/excf6z61k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="excf6z61k"/>`,
		"fallback": "pinhead:cartoon-bomb-with-lit-fuse",
	});
}

export default Component;
