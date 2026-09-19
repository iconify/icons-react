import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/if55a7bnz.css';
import '../../css/e/e-oh7bbgy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8z9Kecla"><g class="rohhhzb0l"><path class="if55a7bnz"/><path class="e-oh7bbgy"/></g></mask></defs><path mask="url(#SVG8z9Kecla)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-txt",
	});
}

export default Component;
