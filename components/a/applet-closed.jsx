import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wazvzmbyi.css';
import '../../css/m/mvkz-zbzz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxLKXVbHn"><g class="aql7dnt-u"><path class="wazvzmbyi"/><path class="mvkz-zbzz"/></g></mask></defs><path mask="url(#SVGxLKXVbHn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:applet-closed",
	});
}

export default Component;
