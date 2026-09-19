import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7g8vpbdo.css';
import '../../css/n/n1986m9oo.css';
import '../../css/h/h9mcgab9q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh8KaKdEb"><g class="l7g8vpbdo"><path class="n1986m9oo"/><path class="h9mcgab9q"/></g></mask></defs><path mask="url(#SVGh8KaKdEb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:dark-mode",
	});
}

export default Component;
