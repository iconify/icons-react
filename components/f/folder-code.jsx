import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/s/slyahbp1a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxx12QchQ"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="slyahbp1a"/></g></mask></defs><path mask="url(#SVGxx12QchQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-code",
	});
}

export default Component;
