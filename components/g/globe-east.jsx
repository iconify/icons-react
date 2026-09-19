import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b3zk9cc4a.css';
import '../../css/k/k4d0zk3uc.css';
import '../../css/p/p1jb66b3j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b3zk9cc4a"/><path class="k4d0zk3uc"/><path class="p1jb66b3j"/></g>`,
		"fallback": "glyphs:globe-east",
	});
}

export default Component;
