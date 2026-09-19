import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/eg_wvsb4d.css';
import '../../css/f/f0ql7tbff.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGa0DOTdgy"><g class="v3_i3wktz"><path class="eg_wvsb4d"/><path class="f0ql7tbff"/></g></mask></defs><path mask="url(#SVGa0DOTdgy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:document-folder",
	});
}

export default Component;
