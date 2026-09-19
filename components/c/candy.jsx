import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/w19zccbwk.css';
import '../../css/b/b8ax9pbxl.css';
import '../../css/x/xzng-4bwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKv92mcmB"><g class="rohhhzb0l"><circle class="w19zccbwk"/><path class="b8ax9pbxl"/><path class="xzng-4bwi"/></g></mask></defs><path mask="url(#SVGKv92mcmB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:candy",
	});
}

export default Component;
