import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/m/m29obl2ex.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGswysqefY"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="m29obl2ex"/></g></mask></defs><path mask="url(#SVGswysqefY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:five-key",
	});
}

export default Component;
