import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fr8naq4ou.css';
import '../../css/l/lz2_s1bck.css';
import '../../css/m/m5znx-b1e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqkBKucJk"><g class="v3_i3wktz"><path class="fr8naq4ou"/><path class="lz2_s1bck"/><path class="m5znx-b1e"/></g></mask></defs><path mask="url(#SVGqkBKucJk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:coffee-machine",
	});
}

export default Component;
