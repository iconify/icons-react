import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7lubrdpa.css';
import '../../css/f/fb_76dncy.css';
import '../../css/h/hfj82dbwb.css';
import '../../css/h/hgvjnjbvb.css';
import '../../css/i/izjqjebun.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKDfoscOA"><g class="ft5dv1b6b"><circle class="c7lubrdpa"/><path class="fb_76dncy"/><path class="hfj82dbwb"/><circle class="hgvjnjbvb"/><path class="izjqjebun"/></g></mask></defs><path mask="url(#SVGKDfoscOA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bell-ring",
	});
}

export default Component;
