import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vyuj474bb.css';
import '../../css/b/b45yybqoa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWv9vkuFL"><g class="aql7dnt-u"><path clip-rule="evenodd" class="vyuj474bb"/><path class="b45yybqoa"/></g></mask></defs><path mask="url(#SVGWv9vkuFL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bus-two",
	});
}

export default Component;
