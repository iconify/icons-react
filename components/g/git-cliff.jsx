import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbue6y19c.css';
import '../../css/h/hcbo7lb7t.css';
import '../../css/j/j-sz-bc4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbue6y19c"/><path class="hcbo7lb7t"/><circle class="j-sz-bc4u"/>`,
		"fallback": "catppuccin:git-cliff",
	});
}

export default Component;
