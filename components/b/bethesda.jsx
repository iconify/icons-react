import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2csbibpu.css';
import '../../css/m/mkb8spb3x.css';
import '../../css/w/wyoo44k5i.css';

const viewBox = {"width":400,"height":187.485};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g2csbibpu"><path class="mkb8spb3x"/><path class="wyoo44k5i"/></g>`,
		"fallback": "thesvg-color:bethesda",
	});
}

export default Component;
