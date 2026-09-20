import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0s77uk3v.css';
import '../../css/o/oclompb7u.css';
import '../../css/y/y-ttjwi6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0s77uk3v"/><circle class="oclompb7u"/><path class="y-ttjwi6a"/>`,
		"fallback": "uim:exclamation-triangle",
	});
}

export default Component;
