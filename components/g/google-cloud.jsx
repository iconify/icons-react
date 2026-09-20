import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l65qnwbfp.css';
import '../../css/t/t1ve2lb7z.css';
import '../../css/b/b03-2c0jf.css';
import '../../css/a/aj_f1ygkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l65qnwbfp"/><path class="t1ve2lb7z"/><path class="b03-2c0jf"/><path class="aj_f1ygkx"/>`,
		"fallback": "selfhst:google-cloud",
	});
}

export default Component;
