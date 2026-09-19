import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gkya1z9sa.css';
import '../../css/f/fsbjilb4d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnuJtudBV"><g class="v3_i3wktz"><path class="gkya1z9sa"/><path class="fsbjilb4d"/></g></mask></defs><path mask="url(#SVGnuJtudBV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circle-five-line",
	});
}

export default Component;
