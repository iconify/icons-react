import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_sl74nof.css';
import '../../css/q/qzfku3wns.css';
import '../../css/n/n0payybjm.css';
import '../../css/x/x0iqjbb6u.css';
import '../../css/z/z6pm0jbuv.css';
import '../../css/g/gsr-h6bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_sl74nof"/><path class="qzfku3wns"/><path class="n0payybjm"/><path class="x0iqjbb6u"/><path class="z6pm0jbuv"/><path class="gsr-h6bma"/>`,
		"fallback": "solar:brain-outline",
	});
}

export default Component;
