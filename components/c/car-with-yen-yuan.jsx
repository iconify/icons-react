import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rei8szb3x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rei8szb3x"/>`,
		"fallback": "pinhead:car-with-yen-yuan",
	});
}

export default Component;
