import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw0tj_jxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw0tj_jxg"/>`,
		"fallback": "reicon:descending-sorting-filled",
	});
}

export default Component;
