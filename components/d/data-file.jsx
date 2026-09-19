import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nxl8u5bfk.css';
import '../../css/c/c2xbj-bwx.css';
import '../../css/k/kggs05b4a.css';
import '../../css/f/f9e708x_v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGY1UExgJe"><g class="wwvp95byt"><path class="nxl8u5bfk"/><path class="c2xbj-bwx"/><path class="kggs05b4a"/><path class="f9e708x_v"/></g></mask></defs><path mask="url(#SVGY1UExgJe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:data-file",
	});
}

export default Component;
