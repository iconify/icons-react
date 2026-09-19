import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/eme4c3hbl.css';
import '../../css/g/grjaxzi4b.css';
import '../../css/i/i8l5-bctd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdJvt4dLq"><g class="aql7dnt-u"><rect class="eme4c3hbl"/><path class="grjaxzi4b"/><path class="i8l5-bctd"/></g></mask></defs><path mask="url(#SVGdJvt4dLq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:door-handle",
	});
}

export default Component;
