import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/lf83cxb8z.css';
import '../../css/o/orlfnvmgi.css';
import '../../css/r/ri7ymhbfz.css';
import '../../css/a/as81pf7bf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJu9P0c0o"><g class="v3_i3wktz"><path class="lf83cxb8z"/><path class="orlfnvmgi"/><path class="ri7ymhbfz"/><path class="as81pf7bf"/></g></mask></defs><path mask="url(#SVGJu9P0c0o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hourglass-full",
	});
}

export default Component;
