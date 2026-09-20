import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nkx8o5sut.css';
import '../../css/b/bmyvckb1b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nkx8o5sut"/><path class="bmyvckb1b"/></g>`,
		"fallback": "streamline:beer-pitch",
	});
}

export default Component;
