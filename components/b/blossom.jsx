import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uuexjlzzv.css';
import '../../css/k/kz-5a-d1e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeZgSPbIM"><g class="aql7dnt-u"><path class="uuexjlzzv"/><path class="kz-5a-d1e"/></g></mask></defs><path mask="url(#SVGeZgSPbIM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:blossom",
	});
}

export default Component;
