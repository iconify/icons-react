import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3s7nok3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u3s7nok3h"/>`,
		"fallback": "streamline-logos:cloudsmith-logo-block",
	});
}

export default Component;
