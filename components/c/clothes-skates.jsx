import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/x6knv9d5h.css';
import '../../css/h/ht5gvjbvi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhet3wbJU"><g class="aql7dnt-u"><path class="x6knv9d5h"/><circle class="ht5gvjbvi"/></g></mask></defs><path mask="url(#SVGhet3wbJU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-skates",
	});
}

export default Component;
