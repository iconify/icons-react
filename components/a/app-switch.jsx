import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b-csrt7jt.css';
import '../../css/z/z_n1vqbki.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeP9FDxMX"><g class="aql7dnt-u"><path class="b-csrt7jt"/><path class="z_n1vqbki"/></g></mask></defs><path mask="url(#SVGeP9FDxMX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:app-switch",
	});
}

export default Component;
