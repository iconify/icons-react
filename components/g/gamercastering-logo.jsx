import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/ewu40p8ah.css';
import '../../css/r/rbk42vbjf.css';
import '../../css/p/p72gbhb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ewu40p8ah"/><path class="rbk42vbjf"/><path class="p72gbhb3n"/></g>`,
		"fallback": "streamline-logos:gamercastering-logo",
	});
}

export default Component;
