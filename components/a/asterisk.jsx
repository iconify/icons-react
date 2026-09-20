import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i62i6jc8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i62i6jc8w"/>`,
		"fallback": "tabler:asterisk",
	});
}

export default Component;
