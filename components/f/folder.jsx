import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/yfs4jb1si.css';
import '../../css/q/q-xfi1bps.css';
import '../../css/n/n63q_g6zn.css';
import '../../css/b/b2655oxjs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLBhUBdBt"><g class="wwvp95byt"><path class="yfs4jb1si"/><path class="q-xfi1bps"/><circle class="n63q_g6zn"/><path class="b2655oxjs"/></g></mask></defs><path mask="url(#SVGLBhUBdBt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder",
	});
}

export default Component;
