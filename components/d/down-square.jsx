import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/u/uc--qkbmr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMYIpBe4u"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="uc--qkbmr"/></g></mask></defs><path mask="url(#SVGMYIpBe4u)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:down-square",
	});
}

export default Component;
