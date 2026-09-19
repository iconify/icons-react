import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ajyf3nzah.css';
import '../../css/s/sqkeg0bva.css';
import '../../css/f/ft8985_nd.css';
import '../../css/f/f4un4zb0e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEqshUday"><g class="rohhhzb0l"><path class="ajyf3nzah"/><path class="sqkeg0bva"/><rect class="ft8985_nd"/><path class="f4un4zb0e"/></g></mask></defs><path mask="url(#SVGEqshUday)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hold-interface",
	});
}

export default Component;
