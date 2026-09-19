import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ifj0fdciu.css';
import '../../css/e/es7v8f_kc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcWC6kU5w"><g class="aql7dnt-u"><path class="ifj0fdciu"/><path class="es7v8f_kc"/></g></mask></defs><path mask="url(#SVGcWC6kU5w)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chair-one",
	});
}

export default Component;
