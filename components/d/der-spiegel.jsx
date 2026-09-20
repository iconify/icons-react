import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwg-gc-pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwg-gc-pl"/>`,
		"fallback": "thesvg:der-spiegel",
	});
}

export default Component;
