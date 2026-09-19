import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uc-2f9vbf.css';
import '../../css/k/k7sl3bboy.css';
import '../../css/r/rg5jo6gkv.css';
import '../../css/l/lxqcwwbex.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTebUpqlO"><g class="aql7dnt-u"><path class="uc-2f9vbf"/><path class="k7sl3bboy"/><path class="rg5jo6gkv"/><path class="lxqcwwbex"/></g></mask></defs><path mask="url(#SVGTebUpqlO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:headset-two",
	});
}

export default Component;
