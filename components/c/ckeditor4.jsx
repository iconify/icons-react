import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg3ihlbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg3ihlbat"/>`,
		"fallback": "simple-icons:ckeditor4",
	});
}

export default Component;
