import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f694ycdso.css';
import '../../css/w/wtg9n8boz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjL7PiedM"><g class="aql7dnt-u"><path class="f694ycdso"/><path class="wtg9n8boz"/></g></mask></defs><path mask="url(#SVGjL7PiedM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gift-box",
	});
}

export default Component;
