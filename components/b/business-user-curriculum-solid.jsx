import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_oqk_xza.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i_oqk_xza"/>`,
		"fallback": "streamline:business-user-curriculum-solid",
	});
}

export default Component;
