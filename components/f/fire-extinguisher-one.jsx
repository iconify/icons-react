import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xlq2m0blx.css';
import '../../css/p/pot_04b4h.css';
import '../../css/d/dqujb-3pm.css';
import '../../css/j/jtilm806p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlRr3teka"><g class="v3_i3wktz"><path class="xlq2m0blx"/><path class="pot_04b4h"/><path class="dqujb-3pm"/><path class="jtilm806p"/></g></mask></defs><path mask="url(#SVGlRr3teka)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fire-extinguisher-one",
	});
}

export default Component;
