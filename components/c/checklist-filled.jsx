import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi_ta4byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vi_ta4byr"/>`,
		"fallback": "reicon:checklist-filled",
	});
}

export default Component;
