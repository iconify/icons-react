import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs47e-3br.css';
import '../../css/a/aoxakixux.css';
import '../../css/p/p40xy5_iy.css';
import '../../css/n/nhzfkpzbc.css';
import '../../css/f/foyse7bvu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUNxzzdQZ"><g class="ft5dv1b6b"><ellipse class="bs47e-3br"/><ellipse class="aoxakixux"/><path class="p40xy5_iy"/><path class="nhzfkpzbc"/><ellipse class="foyse7bvu"/></g></mask></defs><path mask="url(#SVGUNxzzdQZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:face-powder",
	});
}

export default Component;
