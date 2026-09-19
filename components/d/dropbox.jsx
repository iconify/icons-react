import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/z6l2x0pwq.css';
import '../../css/f/fr5macbyd.css';
import '../../css/s/sl_g-c3zu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHpfRzeTP"><g class="v3_i3wktz"><path class="z6l2x0pwq"/><path class="fr5macbyd"/><path class="sl_g-c3zu"/></g></mask></defs><path mask="url(#SVGHpfRzeTP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:dropbox",
	});
}

export default Component;
