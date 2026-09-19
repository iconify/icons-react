import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lku1cybne.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5D2dBcbR"><path class="lku1cybne"/></mask></defs><path mask="url(#SVG5D2dBcbR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bad-two",
	});
}

export default Component;
