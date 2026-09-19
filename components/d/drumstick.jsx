import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pt-k11ban.css';
import '../../css/e/eg0-n9b6u.css';
import '../../css/h/hdi3ax2rf.css';
import '../../css/w/wj6g0ubdg.css';
import '../../css/f/f9aoq4i-d.css';
import '../../css/b/bb6ojk4-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXs5GOcgI"><g class="ft5dv1b6b"><path class="pt-k11ban"/><path class="eg0-n9b6u"/><ellipse transform="rotate(45 32.535 15.435)" class="hdi3ax2rf"/><circle transform="rotate(45 30.06 11.398)" class="wj6g0ubdg"/><circle transform="rotate(45 37.132 18.47)" class="f9aoq4i-d"/><circle transform="rotate(45 31.475 17.055)" class="bb6ojk4-u"/></g></mask></defs><path mask="url(#SVGXs5GOcgI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:drumstick",
	});
}

export default Component;
