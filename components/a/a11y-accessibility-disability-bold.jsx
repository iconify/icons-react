import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmjklobki.css';
import '../../css/z/z4f-w-r2s.css';
import '../../css/a/a69psnbrc.css';
import '../../css/f/fw1nweb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmjklobki"/><path clip-rule="evenodd" class="z4f-w-r2s"/><path class="a69psnbrc"/><path clip-rule="evenodd" class="fw1nweb3x"/>`,
		"fallback": "streamline-ultimate:a11y-accessibility-disability-bold",
	});
}

export default Component;
