import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okgz12nva.css';
import '../../css/z/zodq6nf7i.css';
import '../../css/f/fahs8gboc.css';
import '../../css/b/bq2tznbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="okgz12nva"/><path class="zodq6nf7i"/><path class="fahs8gboc"/><path class="bq2tznbna"/></g>`,
		"fallback": "andrsrxn:device-phone-image-vertical",
	});
}

export default Component;
