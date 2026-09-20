import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abn7u8b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abn7u8b5a"/>`,
		"fallback": "keyline-icons:chart-line-decreasing-sharp",
	});
}

export default Component;
