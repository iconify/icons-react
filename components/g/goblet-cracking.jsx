import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t1-uyccej.css';
import '../../css/h/hym5wwcis.css';
import '../../css/e/ewd5e-bwq.css';
import '../../css/m/mwarud2al.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJlIPmcZR"><g class="wwvp95byt"><path class="t1-uyccej"/><path class="hym5wwcis"/><path class="ewd5e-bwq"/><path class="mwarud2al"/></g></mask></defs><path mask="url(#SVGJlIPmcZR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:goblet-cracking",
	});
}

export default Component;
