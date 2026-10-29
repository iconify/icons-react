import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxqipdbey.css';
import '../../css/r/r0o5csbbz.css';
import '../../css/i/im5ak682z.css';
import '../../css/l/lg1w-ib2u.css';
import '../../css/m/m3bazig9y.css';
import '../../css/z/znl4potho.css';
import '../../css/t/tqjp469jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxqipdbey wm-shadow"/><path class="r0o5csbbz"/><path class="im5ak682z"/><path class="lg1w-ib2u"/><path class="m3bazig9y"/><path class="wm-shine znl4potho"/><path class="tqjp469jy"/>`,
		"fallback": "withicons-plush:bone",
	});
}

export default Component;
