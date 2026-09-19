import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v8rhqlbnk.css';
import '../../css/d/d-51ep7ot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTPGcnepP"><g class="aql7dnt-u"><path class="v8rhqlbnk"/><path class="d-51ep7ot"/></g></mask></defs><path mask="url(#SVGTPGcnepP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diamonds",
	});
}

export default Component;
