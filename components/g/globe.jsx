import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dkbc58bxi.css';
import '../../css/o/or039z06o.css';
import '../../css/h/h3zgu7-gy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpKjpocWi"><g class="aql7dnt-u"><path class="dkbc58bxi"/><path clip-rule="evenodd" class="or039z06o"/><path class="h3zgu7-gy"/></g></mask></defs><path mask="url(#SVGpKjpocWi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:globe",
	});
}

export default Component;
