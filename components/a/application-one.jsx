import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cp-yxsb5p.css';
import '../../css/m/m6257tb5b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlifwpegN"><g class="v3_i3wktz"><path class="cp-yxsb5p"/><path class="m6257tb5b"/></g></mask></defs><path mask="url(#SVGlifwpegN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:application-one",
	});
}

export default Component;
