import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/j850wac-i.css';
import '../../css/j/jscy4e9qf.css';
import '../../css/q/q86czhbiz.css';
import '../../css/y/ycl7obp1h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnhhrnc1K"><g class="rohhhzb0l"><path class="j850wac-i"/><path class="jscy4e9qf"/><circle class="q86czhbiz"/><circle class="ycl7obp1h"/></g></mask></defs><path mask="url(#SVGnhhrnc1K)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:engineering-vehicle",
	});
}

export default Component;
