import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhj3n1bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lhj3n1bhe"/>`,
		"fallback": "streamline-logos:instapaper-logo-block",
	});
}

export default Component;
