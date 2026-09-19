import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0e433kwc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9ccM2cls"><path class="l0e433kwc"/></mask></defs><path mask="url(#SVG9ccM2cls)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-right-two",
	});
}

export default Component;
