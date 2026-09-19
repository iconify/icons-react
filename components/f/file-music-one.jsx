import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zej0gtb4k.css';
import '../../css/h/hgd8yhblr.css';
import '../../css/n/nzzcombqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQxsK2bKz"><g class="aql7dnt-u"><path class="zej0gtb4k"/><circle class="hgd8yhblr"/><path class="nzzcombqn"/></g></mask></defs><path mask="url(#SVGQxsK2bKz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-music-one",
	});
}

export default Component;
