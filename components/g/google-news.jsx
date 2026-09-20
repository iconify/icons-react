import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwntu8bvo.css';
import '../../css/p/prgp_kb3g.css';
import '../../css/x/xjg8z6b4j.css';
import '../../css/s/sbke0sagr.css';
import '../../css/s/s3cgyyb9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwntu8bvo"/><path class="prgp_kb3g"/><path class="xjg8z6b4j"/><path class="sbke0sagr"/><path class="s3cgyyb9p"/>`,
		"fallback": "selfhst:google-news",
	});
}

export default Component;
