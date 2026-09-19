import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cpeep6ycm.css';
import '../../css/q/qvra_uwad.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKPxBxciR"><g class="hv130ab-t"><path clip-rule="evenodd" class="cpeep6ycm"/><path class="qvra_uwad"/></g></mask></defs><path mask="url(#SVGKPxBxciR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:download-four",
	});
}

export default Component;
