import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg2dmo1tu.css';
import '../../css/h/hb6p0db8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlCaPwdaD"><g class="ft5dv1b6b"><path class="rg2dmo1tu"/><circle class="hb6p0db8j"/></g></mask></defs><path mask="url(#SVGlCaPwdaD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:dolphin",
	});
}

export default Component;
