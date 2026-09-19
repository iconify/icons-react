import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/b/bvncembqc.css';
import '../../css/y/yp3vjsbtd.css';
import '../../css/f/fy_-6tw5f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFphxOexL"><g class="hv130ab-t"><path class="bvncembqc"/><path class="yp3vjsbtd"/><circle transform="rotate(45 33.485 33.485)" class="fy_-6tw5f"/></g></mask></defs><path mask="url(#SVGFphxOexL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-search",
	});
}

export default Component;
