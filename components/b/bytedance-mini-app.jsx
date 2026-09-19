import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w55in7b1i.css';
import '../../css/p/p7n68sf5k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlxng2cfv"><g class="wwvp95byt"><path class="w55in7b1i"/><path class="p7n68sf5k"/></g></mask></defs><path mask="url(#SVGlxng2cfv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bytedance-mini-app",
	});
}

export default Component;
