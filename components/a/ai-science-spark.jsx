import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u3uvukb0e.css';
import '../../css/o/om-7jcbvm.css';
import '../../css/b/b7youbx0e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u3uvukb0e"/><path class="om-7jcbvm"/><path class="b7youbx0e"/></g>`,
		"fallback": "streamline:ai-science-spark",
	});
}

export default Component;
