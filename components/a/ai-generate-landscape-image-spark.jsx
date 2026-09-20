import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pdynspj-w.css';
import '../../css/d/dstvg4b7n.css';
import '../../css/a/ar0_svbsd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pdynspj-w"/><path class="dstvg4b7n"/><path class="ar0_svbsd"/></g>`,
		"fallback": "streamline:ai-generate-landscape-image-spark",
	});
}

export default Component;
