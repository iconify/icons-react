import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/f694ycdso.css';
import '../../css/z/z3m924b_g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcZLgRdnM"><g class="v3_i3wktz"><path class="f694ycdso"/><path class="z3m924b_g"/></g></mask></defs><path mask="url(#SVGcZLgRdnM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:expand-left",
	});
}

export default Component;
