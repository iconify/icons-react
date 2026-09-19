import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/g/g5oougblb.css';
import '../../css/y/y31--wboh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6dRdjcVe"><g class="hv130ab-t"><path class="g5oougblb"/><path class="y31--wboh"/></g></mask></defs><path mask="url(#SVG6dRdjcVe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-right-one",
	});
}

export default Component;
