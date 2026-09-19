import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/t66yi6bna.css';
import '../../css/x/x020qsbsu.css';
import '../../css/n/n4bdwrb1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGH8ks1qty"><g class="v3_i3wktz"><path class="t66yi6bna"/><path class="x020qsbsu"/><path class="n4bdwrb1l"/></g></mask></defs><path mask="url(#SVGH8ks1qty)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby-taste",
	});
}

export default Component;
