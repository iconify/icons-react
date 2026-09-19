import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/sd7_eg-9t.css';
import '../../css/x/xux_17e-z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzKwQO2Gl"><g class="rohhhzb0l"><path class="sd7_eg-9t"/><path class="xux_17e-z"/></g></mask></defs><path mask="url(#SVGzKwQO2Gl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:enquire",
	});
}

export default Component;
