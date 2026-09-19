import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vg93xbbfp.css';
import '../../css/f/f0a4gwbcn.css';
import '../../css/h/hl39ackjs.css';
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
		"content": `<defs><mask id="SVGq7dpfFnu"><g class="ft5dv1b6b"><path class="vg93xbbfp"/><path class="f0a4gwbcn"/><path class="hl39ackjs"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k___aiysz"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k___aiysz"/></g></mask></defs><path mask="url(#SVGq7dpfFnu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:add-web",
	});
}

export default Component;
