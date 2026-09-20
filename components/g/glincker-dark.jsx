import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar1skxb1o.css';
import '../../css/q/q35s5pbbu.css';

const viewBox = {"width":375,"height":375};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar1skxb1o"/><path class="q35s5pbbu"/>`,
		"fallback": "thesvg-color:glincker-dark",
	});
}

export default Component;
