import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvdlkkmwq.css';
import '../../css/l/lg4joxb9h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPvIAkcLy"><g class="ft5dv1b6b"><path class="cvdlkkmwq"/><circle class="lg4joxb9h"/></g></mask></defs><path mask="url(#SVGPvIAkcLy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:eagle",
	});
}

export default Component;
