import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nase2xuah.css';
import '../../css/b/b19-m_b5y.css';
import '../../css/z/z41dbgpxo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nase2xuah"/><path class="b19-m_b5y"/><path class="z41dbgpxo"/></g>`,
		"fallback": "streamline:ai-generate-portrait-image-spark",
	});
}

export default Component;
