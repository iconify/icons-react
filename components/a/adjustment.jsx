import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rwe_zsbvy.css';
import '../../css/l/l56ko-bcu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5kAc4d1z"><g class="aql7dnt-u"><path class="rwe_zsbvy"/><path class="l56ko-bcu"/></g></mask></defs><path mask="url(#SVG5kAc4d1z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:adjustment",
	});
}

export default Component;
