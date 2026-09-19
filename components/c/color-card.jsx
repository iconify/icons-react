import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut_hpzbdc.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zavr3z0lv.css';
import '../../css/n/ngd883n6z.css';
import '../../css/t/t0ady5bdn.css';
import '../../css/a/a8y4fl3xp.css';
import '../../css/k/k-489ybvw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGv4OA8Dtv" class="ut_hpzbdc"/><mask id="SVGgKCvycdb"><g class="ft5dv1b6b"><path class="zavr3z0lv"/><path class="ngd883n6z"/><path class="t0ady5bdn"/><use href="#SVGv4OA8Dtv" class="a8y4fl3xp"/><use href="#SVGv4OA8Dtv" class="a8y4fl3xp"/><path class="k-489ybvw"/></g></mask></defs><path mask="url(#SVGgKCvycdb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:color-card",
	});
}

export default Component;
