import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsg1p1yyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsg1p1yyq"/>`,
		"fallback": "octicon:file-directory-open-fill-24",
	});
}

export default Component;
