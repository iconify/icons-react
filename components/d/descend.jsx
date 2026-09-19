import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gnvb1abbz.css';
import '../../css/n/nks455yhk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpyqN7bYr"><g class="aql7dnt-u"><path class="gnvb1abbz"/><path class="nks455yhk"/></g></mask></defs><path mask="url(#SVGpyqN7bYr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:descend",
	});
}

export default Component;
