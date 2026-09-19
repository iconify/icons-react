import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/b/bcdfr0bxx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGr6swMbc"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="bcdfr0bxx"/></g></mask></defs><path mask="url(#SVGGr6swMbc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:f-four-key",
	});
}

export default Component;
