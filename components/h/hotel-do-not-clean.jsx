import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytljj_1kl.css';
import '../../css/c/c812ekzbz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzz9WpceD"><g class="ft5dv1b6b"><path class="ytljj_1kl"/><path class="c812ekzbz"/></g></mask></defs><path mask="url(#SVGzz9WpceD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hotel-do-not-clean",
	});
}

export default Component;
