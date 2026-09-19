import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/t58uh_b7n.css';
import '../../css/g/ghea5cbsp.css';
import '../../css/i/igbkoxb2y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7fyBHvjX"><g class="aql7dnt-u"><path class="t58uh_b7n"/><circle class="ghea5cbsp"/><path class="igbkoxb2y"/></g></mask></defs><path mask="url(#SVG7fyBHvjX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flip-camera",
	});
}

export default Component;
