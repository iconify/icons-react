import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/et_ilf6md.css';
import '../../css/p/prte9nb5i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="et_ilf6md"/><path class="prte9nb5i"/></g>`,
		"fallback": "streamline:ai-technology-spark",
	});
}

export default Component;
