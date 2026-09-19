import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/u/uetx09b4z.css';
import '../../css/v/vyb-o5bdg.css';
import '../../css/u/u2iwhef-s.css';
import '../../css/e/ewg6ksbdr.css';
import '../../css/h/hdtngbcge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGePku97cu"><g class="hv130ab-t"><path class="uetx09b4z"/><path class="vyb-o5bdg"/><path class="u2iwhef-s"/><path class="ewg6ksbdr"/><path class="hdtngbcge"/></g></mask></defs><path mask="url(#SVGePku97cu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circus",
	});
}

export default Component;
