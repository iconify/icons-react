import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_5ndpb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_5ndpb1f"/>`,
		"fallback": "tdesign:chevron-right-double-s",
	});
}

export default Component;
