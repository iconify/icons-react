import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fqsvnfbdg.css';
import '../../css/e/e7dr5zbeu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh5aOocYS"><g class="v3_i3wktz"><rect class="fqsvnfbdg"/><path class="e7dr5zbeu"/></g></mask></defs><path mask="url(#SVGh5aOocYS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:electronic-locks-close",
	});
}

export default Component;
