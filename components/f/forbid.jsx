import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jdvggry0v.css';
import '../../css/l/l6k751x3i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUXIujdkU"><g class="wwvp95byt"><path clip-rule="evenodd" class="jdvggry0v"/><path class="l6k751x3i"/></g></mask></defs><path mask="url(#SVGUXIujdkU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:forbid",
	});
}

export default Component;
