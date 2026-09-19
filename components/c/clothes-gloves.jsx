import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d48krva-u.css';
import '../../css/n/nu3w2abno.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkYqmLdhu"><g class="ft5dv1b6b"><path class="d48krva-u"/><path class="nu3w2abno"/></g></mask></defs><path mask="url(#SVGkYqmLdhu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-gloves",
	});
}

export default Component;
