import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ualx4gbii.css';
import '../../css/b/bi2kk0fuu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDt0bN0Ix"><g class="aql7dnt-u"><path class="ualx4gbii"/><path class="bi2kk0fuu"/></g></mask></defs><path mask="url(#SVGDt0bN0Ix)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fork-spoon",
	});
}

export default Component;
