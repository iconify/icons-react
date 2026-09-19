import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/racflo02i.css';
import '../../css/k/k8ldz2z3e.css';
import '../../css/m/mrw80-u1y.css';
import '../../css/q/qnz-s-hbf.css';
import '../../css/c/c3mtq3vxr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXLpHDOKO"><g class="racflo02i"><path class="k8ldz2z3e"/><path clip-rule="evenodd" class="mrw80-u1y"/><path class="qnz-s-hbf"/><path class="c3mtq3vxr"/></g></mask></defs><path mask="url(#SVGXLpHDOKO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cell",
	});
}

export default Component;
