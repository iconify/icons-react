import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nxl8u5bfk.css';
import '../../css/k/kon0fygmq.css';
import '../../css/l/lm3a1etge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGm3OZHc6R"><g class="wwvp95byt"><path class="nxl8u5bfk"/><path class="kon0fygmq"/><circle class="lm3a1etge"/></g></mask></defs><path mask="url(#SVGm3OZHc6R)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:audio-file",
	});
}

export default Component;
