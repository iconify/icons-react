import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_sj2cbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l_sj2cbvl"/>`,
		"fallback": "streamline-logos:bing-logo-2-block",
	});
}

export default Component;
