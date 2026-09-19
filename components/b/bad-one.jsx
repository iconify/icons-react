import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8x7susgg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHtA3wd4c"><path class="d8x7susgg"/></mask></defs><path mask="url(#SVGHtA3wd4c)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bad-one",
	});
}

export default Component;
