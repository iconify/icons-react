import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/u/ud5c6fcjr.css';
import '../../css/o/okqenj9_f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBtCSXbUx"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="ud5c6fcjr"/><circle class="okqenj9_f"/></g></mask></defs><path mask="url(#SVGBtCSXbUx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-music",
	});
}

export default Component;
