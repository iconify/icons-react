import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jsspaw5ps.css';
import '../../css/e/e6j8h5b3s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgpjYybXi"><g class="v3_i3wktz"><path class="jsspaw5ps"/><path class="e6j8h5b3s"/></g></mask></defs><path mask="url(#SVGgpjYybXi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clipboard",
	});
}

export default Component;
