import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kf9iljxev.css';
import '../../css/i/iog5bvc2b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDiIGbbnD"><g class="v3_i3wktz"><rect class="kf9iljxev"/><path class="iog5bvc2b"/></g></mask></defs><path mask="url(#SVGDiIGbbnD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:box",
	});
}

export default Component;
