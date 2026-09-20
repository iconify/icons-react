import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6lgaybth.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6lgaybth"/>`,
		"fallback": "wi:humidity",
	});
}

export default Component;
