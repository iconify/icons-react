import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm81jd_my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm81jd_my"/>`,
		"fallback": "griddy-icons:anchor",
	});
}

export default Component;
