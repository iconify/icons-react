import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/y3m5p6eju.css';
import '../../css/c/cyr620bkc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPfAb1cWI"><g class="aql7dnt-u"><path class="y3m5p6eju"/><path class="cyr620bkc"/></g></mask></defs><path mask="url(#SVGPfAb1cWI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:brake-pads",
	});
}

export default Component;
