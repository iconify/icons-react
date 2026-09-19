import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rkrcdf-xu.css';
import '../../css/q/qf59tfblw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIcZXicPl"><g class="v3_i3wktz"><path class="rkrcdf-xu"/><path class="qf59tfblw"/></g></mask></defs><path mask="url(#SVGIcZXicPl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:airplay",
	});
}

export default Component;
