import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie3fup9fg.css';
import '../../css/l/lsattvb1c.css';
import '../../css/x/x6mcnkwhc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie3fup9fg"/><path class="lsattvb1c"/><path class="x6mcnkwhc"/>`,
		"fallback": "streamline-pixel:design-hilight",
	});
}

export default Component;
