import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kn964er2l.css';
import '../../css/z/zersuh-bf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBmAcke5P"><g class="v3_i3wktz"><path class="kn964er2l"/><path class="zersuh-bf"/></g></mask></defs><path mask="url(#SVGBmAcke5P)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bezier-curve",
	});
}

export default Component;
