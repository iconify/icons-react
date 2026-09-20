import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-n60hb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-n60hb1x"/>`,
		"fallback": "streamline-logos:bandcamp-logo-2-block",
	});
}

export default Component;
