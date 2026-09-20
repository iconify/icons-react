import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6c2uebib.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6c2uebib"/>`,
		"fallback": "pinhead:brick-wall-with-battlement-and-sallyport",
	});
}

export default Component;
