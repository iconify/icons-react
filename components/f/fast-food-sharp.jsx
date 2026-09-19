import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flab64b9x.css';
import '../../css/e/eehn7s3el.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flab64b9x"/><path class="eehn7s3el"/>`,
		"fallback": "famicons:fast-food-sharp",
	});
}

export default Component;
