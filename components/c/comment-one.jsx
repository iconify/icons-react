import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/aroprubhi.css';
import '../../css/o/othw_sk-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3dkFBcud"><g class="wwvp95byt"><path class="aroprubhi"/><path class="othw_sk-t"/></g></mask></defs><path mask="url(#SVG3dkFBcud)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:comment-one",
	});
}

export default Component;
