import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9j-zbc3e.css';
import '../../css/b/bn3mc-eqy.css';
import '../../css/u/u7n-kwbie.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbElNXbMo"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="l9j-zbc3e"/><path class="bn3mc-eqy"/><path class="u7n-kwbie"/></g></mask></defs><path mask="url(#SVGbElNXbMo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:car",
	});
}

export default Component;
