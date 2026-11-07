import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avz4_kb7i.css';
import '../../css/b/b2_20abta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avz4_kb7i"/><path class="b2_20abta"/>`,
		"fallback": "solar:bone-crack-bold",
	});
}

export default Component;
