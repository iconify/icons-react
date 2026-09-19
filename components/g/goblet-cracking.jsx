import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/krf-rdb_i.css';
import '../../css/h/hs7lmdbki.css';
import '../../css/v/vykt7lbkd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgrJ5qn1D"><g class="aql7dnt-u"><path class="krf-rdb_i"/><path class="hs7lmdbki"/><path class="vykt7lbkd"/></g></mask></defs><path mask="url(#SVGgrJ5qn1D)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:goblet-cracking",
	});
}

export default Component;
