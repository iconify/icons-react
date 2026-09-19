import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hned8ipkc.css';
import '../../css/w/wkhcofbux.css';
import '../../css/s/shjjkdb4r.css';
import '../../css/i/i1sev0bej.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hned8ipkc"/><path class="wkhcofbux"/><path class="shjjkdb4r"/><path class="i1sev0bej"/>`,
		"fallback": "devicon:cplusplus",
	});
}

export default Component;
