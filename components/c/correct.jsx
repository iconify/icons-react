import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh-9rzj9m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6XSMvrWP"><path clip-rule="evenodd" class="lh-9rzj9m"/></mask></defs><path mask="url(#SVG6XSMvrWP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:correct",
	});
}

export default Component;
