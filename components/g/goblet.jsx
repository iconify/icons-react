import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/krf-rdb_i.css';
import '../../css/h/hs7lmdbki.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBtb9udWi"><g class="aql7dnt-u"><path class="krf-rdb_i"/><path class="hs7lmdbki"/></g></mask></defs><path mask="url(#SVGBtb9udWi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:goblet",
	});
}

export default Component;
