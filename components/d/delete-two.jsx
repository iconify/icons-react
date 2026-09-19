import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vtmphkd3e.css';
import '../../css/v/v4xyr1b2d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWL9LYdfa"><g class="wwvp95byt"><path class="vtmphkd3e"/><path class="v4xyr1b2d"/></g></mask></defs><path mask="url(#SVGWL9LYdfa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:delete-two",
	});
}

export default Component;
