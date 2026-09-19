import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kucvonbff.css';
import '../../css/b/bwxwxu62q.css';
import '../../css/l/l-o0nybcd.css';
import '../../css/f/fqvsswb6x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV7PGtcWW"><g class="ft5dv1b6b"><path class="kucvonbff"/><path class="bwxwxu62q"/><path class="l-o0nybcd"/><path class="fqvsswb6x"/></g></mask></defs><path mask="url(#SVGV7PGtcWW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:focus-one",
	});
}

export default Component;
