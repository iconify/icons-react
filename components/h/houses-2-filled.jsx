import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pac7fn7hq.css';
import '../../css/g/gl2fr07us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pac7fn7hq"/><path class="gl2fr07us"/>`,
		"fallback": "tdesign:houses-2-filled",
	});
}

export default Component;
