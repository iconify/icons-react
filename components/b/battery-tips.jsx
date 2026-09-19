import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dedavkmjc.css';
import '../../css/r/r_0d81uyp.css';
import '../../css/k/kdjjl7-tp.css';
import '../../css/k/k___aiysz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlmZzreoD"><g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="dedavkmjc"/><path class="r_0d81uyp"/><path class="kdjjl7-tp"/><circle transform="matrix(0 -1 -1 0 24 34)" class="k___aiysz"/></g></mask></defs><path mask="url(#SVGlmZzreoD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:battery-tips",
	});
}

export default Component;
