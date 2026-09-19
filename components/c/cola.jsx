import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g3k3sybmt.css';
import '../../css/d/d7cnkhb7h.css';
import '../../css/x/xec1e65iq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHZVrtpFY"><g class="rohhhzb0l"><path class="g3k3sybmt"/><path class="d7cnkhb7h"/><path class="xec1e65iq"/></g></mask></defs><path mask="url(#SVGHZVrtpFY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cola",
	});
}

export default Component;
