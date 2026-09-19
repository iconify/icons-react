import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xzv_0hl8c.css';
import '../../css/a/apzaz9ymk.css';
import '../../css/c/cs-ztd51k.css';
import '../../css/u/uispk6bbi.css';
import '../../css/b/bx0fjsvjo.css';
import '../../css/k/k60hb4vsx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="xzv_0hl8c"/><path class="apzaz9ymk"/><path class="cs-ztd51k"/><path class="uispk6bbi"/><path class="bx0fjsvjo"/><path class="k60hb4vsx"/></g>`,
		"fallback": "icon-park:hair-dryer",
	});
}

export default Component;
