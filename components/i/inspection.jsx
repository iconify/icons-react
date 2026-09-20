import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob0xyledb.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob0xyledb"/>`,
		"fallback": "wpf:inspection",
	});
}

export default Component;
