import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d82k-pbon.css';
import '../../css/x/xluneebiq.css';
import '../../css/g/giy505bcc.css';
import '../../css/u/uwl_-tbae.css';
import '../../css/i/i_xymibps.css';
import '../../css/a/afs8u0b4g.css';

const viewBox = {"width":87.3,"height":78};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d82k-pbon"/><path class="xluneebiq"/><path class="giy505bcc"/><path class="uwl_-tbae"/><path class="i_xymibps"/><path class="afs8u0b4g"/>`,
		"fallback": "thesvg-color:google-drive",
	});
}

export default Component;
