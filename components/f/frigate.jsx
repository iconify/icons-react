import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/ppjbcf52z.css';
import '../../css/s/s6kk7juwe.css';
import '../../css/s/scyn38bvf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyounqbOn"><g class="aql7dnt-u"><path class="ppjbcf52z"/><path class="s6kk7juwe"/><path class="scyn38bvf"/></g></mask></defs><path mask="url(#SVGyounqbOn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:frigate",
	});
}

export default Component;
