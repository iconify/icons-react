import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w36-r9b5x.css';
import '../../css/b/bh6vr89yy.css';
import '../../css/x/xumm63b3y.css';
import '../../css/o/ogc3xo4ze.css';
import '../../css/a/adyye9b0y.css';
import '../../css/p/pf2fgiyqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w36-r9b5x wm-shadow"/><path class="bh6vr89yy wm-k"/><path class="wm-k xumm63b3y"/><path class="ogc3xo4ze wm-a"/><path class="adyye9b0y wm-a"/><path class="pf2fgiyqb wm-a"/>`,
		"fallback": "withicons-pastel:dna",
	});
}

export default Component;
