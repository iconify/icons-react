import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/w/wb2s3mmls.css';
import '../../css/q/qo9lr8brf.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="wb2s3mmls"/><path class="qo9lr8brf"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-tonga",
	});
}

export default Component;
