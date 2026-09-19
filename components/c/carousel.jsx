import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/ppec674qb.css';
import '../../css/v/v968wactg.css';
import '../../css/e/e146jsbwe.css';
import '../../css/j/jfq0frq6e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8qUaQbUD"><g class="ufeehvblu"><path class="ppec674qb"/><path class="v968wactg"/><path class="e146jsbwe"/><path class="jfq0frq6e"/></g></mask></defs><path mask="url(#SVG8qUaQbUD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:carousel",
	});
}

export default Component;
