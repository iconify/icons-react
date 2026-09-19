import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/e/eavf2p1cc.css';
import '../../css/f/frmswmbkl.css';
import '../../css/i/i3_fwz-pn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOsoKHeqO"><g class="gopnm44um"><path class="eavf2p1cc"/><path class="frmswmbkl"/><path class="i3_fwz-pn"/></g></mask></defs><path mask="url(#SVGOsoKHeqO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:comments",
	});
}

export default Component;
