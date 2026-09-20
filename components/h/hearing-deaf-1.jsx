import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lww7gybln.css';
import '../../css/a/a1-3z1d7h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lww7gybln"/><path class="a1-3z1d7h"/></g>`,
		"fallback": "streamline:hearing-deaf-1",
	});
}

export default Component;
