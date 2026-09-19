import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbxmsfbue.css';
import '../../css/s/s3c5dhbdv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3oOjleZM"><g class="ft5dv1b6b"><rect class="fbxmsfbue"/><path class="s3c5dhbdv"/></g></mask></defs><path mask="url(#SVG3oOjleZM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:extend",
	});
}

export default Component;
