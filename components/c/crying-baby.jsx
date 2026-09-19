import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/t66yi6bna.css';
import '../../css/m/mhsmvbuqt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgbmeKdJf"><g class="v3_i3wktz"><path class="t66yi6bna"/><path class="mhsmvbuqt"/></g></mask></defs><path mask="url(#SVGgbmeKdJf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:crying-baby",
	});
}

export default Component;
