import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubixxqbpx.css';
import '../../css/r/rum39npnf.css';
import '../../css/c/cfji69bfw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubixxqbpx"/><path class="rum39npnf"/><path class="cfji69bfw"/>`,
		"fallback": "energy-icons:hammock-20",
	});
}

export default Component;
