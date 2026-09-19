import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/blna7_bzy.css';
import '../../css/m/mml5fobfh.css';
import '../../css/w/wywfouyra.css';
import '../../css/j/jc6vycb-x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8e4GgbgE"><g class="wwvp95byt"><path class="blna7_bzy"/><path class="mml5fobfh"/><path class="wywfouyra"/><path class="jc6vycb-x"/></g></mask></defs><path mask="url(#SVG8e4GgbgE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:gift-box",
	});
}

export default Component;
