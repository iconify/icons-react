import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8iyr9bqk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8iyr9bqk"/>`,
		"fallback": "pinhead:beer-mug-with-foam",
	});
}

export default Component;
