import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgzdgcqyr.css';
import '../../css/j/jmo8dnbwh.css';
import '../../css/k/ki-cu7x0w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgzdgcqyr"/><path class="jmo8dnbwh"/><path class="ki-cu7x0w"/>`,
		"fallback": "devicon-plain:haskell-wordmark",
	});
}

export default Component;
