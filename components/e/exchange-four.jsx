import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ufudkb00c.css';
import '../../css/f/f78qrfp0s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlyyFfe2R"><g class="wwvp95byt"><path class="ufudkb00c"/><path class="f78qrfp0s"/></g></mask></defs><path mask="url(#SVGlyyFfe2R)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:exchange-four",
	});
}

export default Component;
