import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sffhwnb-a.css';

const viewBox = {"width":310,"height":310};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sffhwnb-a"/>`,
		"fallback": "thesvg-color:cockpit-cms-dark",
	});
}

export default Component;
