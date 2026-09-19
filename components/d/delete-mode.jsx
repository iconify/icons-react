import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7g8vpbdo.css';
import '../../css/n/n1986m9oo.css';
import '../../css/b/bag1lsb2k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmYYACbtd"><g class="l7g8vpbdo"><path class="n1986m9oo"/><path class="bag1lsb2k"/></g></mask></defs><path mask="url(#SVGmYYACbtd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:delete-mode",
	});
}

export default Component;
