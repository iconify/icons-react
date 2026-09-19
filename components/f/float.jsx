import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jci0qhbcw.css';
import '../../css/c/cjzuttbhh.css';
import '../../css/e/eo9hwabpc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGznp2xeZq"><g class="v3_i3wktz"><path class="jci0qhbcw"/><path class="cjzuttbhh"/><path class="eo9hwabpc"/></g></mask></defs><path mask="url(#SVGznp2xeZq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:float",
	});
}

export default Component;
