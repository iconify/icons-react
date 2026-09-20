import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6xsmtrch.css';
import '../../css/d/dhs8qrwgp.css';
import '../../css/t/t-ux4n71u.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvUPw8b1c"><g class="ft5dv1b6b"><path class="x6xsmtrch"/><path class="dhs8qrwgp"/><path class="t-ux4n71u"/></g></mask></defs><path mask="url(#SVGvUPw8b1c)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:bag-duotone-line",
	});
}

export default Component;
