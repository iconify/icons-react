import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h87q3sr6d.css';
import '../../css/q/q3ij0wstq.css';
import '../../css/e/ehons0qpw.css';
import '../../css/o/o-pilhb8p.css';
import '../../css/r/r51z68bao.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmLBdocFL"><g class="ft5dv1b6b"><path class="h87q3sr6d"/><path class="q3ij0wstq"/><path class="ehons0qpw"/><rect transform="rotate(30 21 4)" class="o-pilhb8p"/><rect transform="rotate(30 13 17.856)" class="r51z68bao"/></g></mask></defs><path mask="url(#SVGmLBdocFL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gavel",
	});
}

export default Component;
