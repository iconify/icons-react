import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/aroprubhi.css';
import '../../css/q/qdq9k4hbn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGi7L48cQi"><g class="wwvp95byt"><path class="aroprubhi"/><path class="qdq9k4hbn"/></g></mask></defs><path mask="url(#SVGi7L48cQi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:comment",
	});
}

export default Component;
