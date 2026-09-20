import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3p7n55pz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3p7n55pz"/>`,
		"fallback": "pinhead:broadshouldered-person-standing",
	});
}

export default Component;
