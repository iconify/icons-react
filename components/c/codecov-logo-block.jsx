import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o733t-byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o733t-byt"/>`,
		"fallback": "streamline-logos:codecov-logo-block",
	});
}

export default Component;
