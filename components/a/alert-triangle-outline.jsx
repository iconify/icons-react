import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rseajir1x.css';
import '../../css/i/iu35e1xme.css';
import '../../css/d/dkdq51b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rseajir1x"/><circle class="iu35e1xme"/><path class="dkdq51b0f"/>`,
		"fallback": "eva:alert-triangle-outline",
	});
}

export default Component;
