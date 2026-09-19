import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laopiwk5n.css';
import '../../css/n/nboie9b2d.css';
import '../../css/b/bfjxetbbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="laopiwk5n"/><path class="nboie9b2d"/><path class="bfjxetbbw"/>`,
		"fallback": "famicons:images-sharp",
	});
}

export default Component;
