import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/anc4d4b1i.css';
import '../../css/w/w3iaqtbfj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh3ITEBGD"><g class="aql7dnt-u"><path class="anc4d4b1i"/><path class="w3iaqtbfj"/></g></mask></defs><path mask="url(#SVGh3ITEBGD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chef-hat",
	});
}

export default Component;
