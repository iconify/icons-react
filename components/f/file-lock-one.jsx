import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/o/ozv-chpao.css';
import '../../css/q/qni72ecbz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2ykNtbBm"><g class="aql7dnt-u"><path class="m3rbq0wjz"/><path class="ozv-chpao"/><path class="qni72ecbz"/></g></mask></defs><path mask="url(#SVG2ykNtbBm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-lock-one",
	});
}

export default Component;
