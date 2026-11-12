import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaunbmwzy.css';
import '../../css/d/dsukp8ctc.css';
import '../../css/u/ubdlf3wbm.css';
import '../../css/l/l4hqxy0vi.css';
import '../../css/e/ee0qnmblt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaunbmwzy"/><path class="dsukp8ctc"/><path class="ubdlf3wbm"/><path class="l4hqxy0vi"/><path class="ee0qnmblt"/>`,
		"fallback": "selfhst:bichon-dark",
	});
}

export default Component;
