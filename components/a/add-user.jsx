import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e_iwscbqa.css';
import '../../css/i/i0ds1rbow.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxZaWXdHc"><g class="aql7dnt-u"><circle class="e_iwscbqa"/><path class="i0ds1rbow"/></g></mask></defs><path mask="url(#SVGxZaWXdHc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:add-user",
	});
}

export default Component;
