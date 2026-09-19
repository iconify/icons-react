import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up0-o6tjm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzJgSle4O"><path class="up0-o6tjm"/></mask></defs><path mask="url(#SVGzJgSle4O)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-three",
	});
}

export default Component;
