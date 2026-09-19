import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-o-afjna.css';
import '../../css/f/f5enjebpt.css';
import '../../css/o/og-ro-b0e.css';
import '../../css/w/wzr2pst3a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGy4NrPdFv"><g class="ft5dv1b6b"><path class="y-o-afjna"/><path class="f5enjebpt"/><path class="og-ro-b0e"/><path class="wzr2pst3a"/></g></mask></defs><path mask="url(#SVGy4NrPdFv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:i-mac",
	});
}

export default Component;
