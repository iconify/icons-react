import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyp2mwbic.css';
import '../../css/b/bfjbko1wp.css';
import '../../css/i/i4ytxgbzl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyp2mwbic"/><path class="bfjbko1wp"/><path class="i4ytxgbzl"/>`,
		"fallback": "flat-color-icons:data-configuration",
	});
}

export default Component;
