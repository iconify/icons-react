import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v0bedlbho.css';
import '../../css/z/zyr8pvb8a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJIRo7nXw"><g class="wwvp95byt"><path class="v0bedlbho"/><path class="zyr8pvb8a"/></g></mask></defs><path mask="url(#SVGJIRo7nXw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:delete-key",
	});
}

export default Component;
