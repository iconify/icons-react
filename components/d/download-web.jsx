import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atwtpgb7i.css';
import '../../css/f/f0a4gwbcn.css';
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
		"content": `<defs><mask id="SVGfCgXseuN"><g class="ft5dv1b6b"><path class="atwtpgb7i"/><path class="f0a4gwbcn"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k___aiysz"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k___aiysz"/></g></mask></defs><path mask="url(#SVGfCgXseuN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:download-web",
	});
}

export default Component;
