import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/y/ywe80ac4w.css';
import '../../css/v/vo256e1ok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXq278c7d"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="ywe80ac4w"/><path class="vo256e1ok"/></g></mask></defs><path mask="url(#SVGXq278c7d)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:fill",
	});
}

export default Component;
