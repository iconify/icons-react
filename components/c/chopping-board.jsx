import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ud93edw7f.css';
import '../../css/w/wj3tatb_p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZBqRGbWG"><g class="wwvp95byt"><path class="ud93edw7f"/><path class="wj3tatb_p"/></g></mask></defs><path mask="url(#SVGZBqRGbWG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:chopping-board",
	});
}

export default Component;
