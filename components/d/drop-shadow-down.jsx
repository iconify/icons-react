import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/coe1g67pu.css';
import '../../css/w/w66q37m7c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjpVwVbCe"><g class="hv130ab-t"><path clip-rule="evenodd" class="coe1g67pu"/><path class="w66q37m7c"/></g></mask></defs><path mask="url(#SVGjpVwVbCe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:drop-shadow-down",
	});
}

export default Component;
