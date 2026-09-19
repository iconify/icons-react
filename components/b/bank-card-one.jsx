import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xk9j6vb_y.css';
import '../../css/i/i_oaw5bnx.css';
import '../../css/u/uojdu77al.css';
import '../../css/d/dxdme3bve.css';
import '../../css/p/pea2i9bca.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZnuMUdsz"><g class="wwvp95byt"><path class="xk9j6vb_y"/><rect class="i_oaw5bnx"/><path class="uojdu77al"/><path class="dxdme3bve"/><path class="pea2i9bca"/></g></mask></defs><path mask="url(#SVGZnuMUdsz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bank-card-one",
	});
}

export default Component;
